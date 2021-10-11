import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./content/Content";
import SideBar from "./sidebar/SideBar";
import "./MainPage.css";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [previousWidth, setPreviousWidth] = useState(-1);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      const widthLimit = 576;
      const isMobile = width <= widthLimit;
      const wasMobile = previousWidth <= widthLimit;

      if (isMobile !== wasMobile) {
        setIsOpen(!isMobile);
      }
      setPreviousWidth(width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggle} isOpen={isOpen} />
        <Content toggle={toggle} isOpen={isOpen} />
      </div>
    </Router>
  );
};

export default MainPage;
