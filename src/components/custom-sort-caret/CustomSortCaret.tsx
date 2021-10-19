import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomSortCaret = (order: "asc" | "desc" | undefined, column: any) => {
    if (!order)
      return (
        <span>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faAngleUp} />
          &nbsp;
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      );
    else if (order === "asc")
      return (
        <span>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      );
    else if (order === "desc")
      return (
        <span>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      );
    return null;
  };

export default CustomSortCaret;