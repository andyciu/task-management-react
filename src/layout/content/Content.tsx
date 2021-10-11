import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { RouteContent } from "../../router/private-route";
import NavbarCustom from "./Navbar";

interface IProps {
  isOpen: boolean;
  toggle: () => void;
}

const Content = (props: IProps) => {
  const { isOpen, toggle } = props;
  return (
    <Container fluid className={classNames("content", { "is-open": isOpen })}>
      <Row>
        <Col>
          <NavbarCustom toggle={toggle} />
        </Col>
      </Row>
      <RouteContent />
    </Container>
  );
};

export default Content;
