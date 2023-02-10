import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder12: "rounded-radius12" };
const variants = { FillGray401: "bg-gray_401 text-black_900" };
const sizes = { sm: "p-[20px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder12"]),
  variant: PropTypes.oneOf(["FillGray401"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder12",
  variant: "FillGray401",
  size: "sm",
};

export { Button };
