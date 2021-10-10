import {
  faBriefcase,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { Children, useState } from "react";
import { Accordion, Card, Nav, useAccordionButton } from "react-bootstrap";
import { StringDecoder } from "string_decoder";
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
  }

  const CustomToggle: React.FC<ICustomToggleProps> = (
    props: ICustomToggleProps
  ) => {
    const { eventKey, onclick, children } = props;
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      console.log("totally custom!");

      if (onclick) {
        onclick();
      }
    });

    return (
      <Nav.Link className="sidebar-link" onClick={decoratedOnClick}>
        {children}
      </Nav.Link>
    );
  };

  return (
    <Nav.Item className={classNames({ open: !collapsed })}>
      <Accordion>
        <CustomToggle eventKey="0" onclick={toggleNavbar}>
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
              <a
                className={`nav-link nav-item pl-5 sidebar-link ${
                  item.text === "Active" ? "active" : ""
                } `}
                href={item.path}
                key={item.path}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}
              </a>
            ))}
          </nav>
        </Accordion.Collapse>
      </Accordion>
    </Nav.Item>
  );
};

export default SubMenu;
