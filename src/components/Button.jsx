import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Button.scss";

function Button(props) {
  const handleClick = (e) => {
    console.log("Button -- handleClick: ", e);
    if (props.onClick) {
      props.onClick(props.id);
    }
  };

  return (
    <button
      className={classnames(
        "button",
        props.buttontype,
        { ["half"]: props.half },
        { ["full"]: props.full }
      )}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  buttontype: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.string,
  half: PropTypes.bool,
  full: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttontype: "primary",
};

export default Button;
