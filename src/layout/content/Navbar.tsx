import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import LoginModal from "../../components/login/LoginModal";

interface IProps {
  toggle: () => void;
}

const NavbarCustom = (props: IProps) => {
  const { toggle } = props;
  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand
    >
      <Navbar.Brand>
        <Button variant="outline-info" onClick={toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <LoginModal />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCustom;
