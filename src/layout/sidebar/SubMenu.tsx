import {
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";
import { Accordion, Nav, useAccordionButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IRoute } from "../../router/config";

interface IProps {
  title: string;
  icon: any;
  items: IRoute[];
}

const SubMenu = (props: IProps) => {
  const { title, icon, items } = props;
  const [collapsed, setSollapsed] = useState(true);

  const toggleNavbar = () => {
    setSollapsed(!collapsed);
  };

  interface ICustomToggleProps {
    eventKey: string;
    onclick?: Function;
    children?: React.ReactNode;
    keystr: string;
  }

  const CustomToggle: React.FC<ICustomToggleProps> = (
    props: ICustomToggleProps
  ) => {
    const { eventKey, onclick, children, keystr } = props;
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      if (onclick) {
        onclick();
      }
    });

    return (
      <Nav.Link
        className="sidebar-link"
        key={"link" + keystr}
        onClick={decoratedOnClick}
      >
        {children}
      </Nav.Link>
    );
  };

  return (
    <Nav.Item className={classNames({ open: !collapsed })}>
      <Accordion>
        <CustomToggle eventKey="0" keystr={title} onclick={toggleNavbar}>
          <FontAwesomeIcon icon={icon} className="mr-2" />
          &nbsp;{title}&nbsp;
          <FontAwesomeIcon
            icon={collapsed ? faCaretDown : faCaretUp}
            className="float-right"
          />
        </CustomToggle>

        <Accordion.Collapse eventKey="0">
          <nav className="nav flex-column">
            {items.map((item) => (
              <Nav.Link
                as={Link}
                to={item.path}
                key={item.path}
                className="sidebar-link"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}
              </Nav.Link>
            ))}
          </nav>
        </Accordion.Collapse>
      </Accordion>
    </Nav.Item>
  );
};

export default SubMenu;
