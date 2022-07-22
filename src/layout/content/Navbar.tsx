import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Navbar } from "react-bootstrap";
import LoginModal from "../../components/login/LoginModal";
import { NickNameText } from "../../components/login/NickNameText";
import { useAppSelector } from "../../store/hook";

interface IProps {
  toggle: () => void;
}

const NavbarCustom = (props: IProps) => {
  const { toggle } = props;
  const isLogin = useAppSelector((state) => state.user.isLogin);

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
        {isLogin ? <NickNameText /> : <LoginModal />}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCustom;
