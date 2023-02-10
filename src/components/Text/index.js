import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[31px] md:text-[33px] text-[35px]",
  h2: "sm:text-[28px] md:text-[30px] text-[32px]",
  h3: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
