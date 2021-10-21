import {
  faTimes,
  faHome,
  faCopy,
  faBriefcase,
  faImage,
  faQuestion,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Button, Nav } from "react-bootstrap";
import { RouteSideBar } from "../../router/private-route";
import SubMenu from "./SubMenu";

interface IProps {
  isOpen: boolean;
  toggle: () => void;
}

const SideBar = (props: IProps) => {
  const { isOpen, toggle } = props;
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <Button
          variant="link"
          onClick={toggle}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
        <h3>Task Management</h3>
      </div>

      <Nav className="flex-column pt-2">
        {/* <p className="ml-3">Heading</p> */}

        <RouteSideBar />
      </Nav>
    </div>
  );
};

export default SideBar;
