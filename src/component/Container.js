import React from "react";
/**
 * Container component
 * Style component, with Bulma.io Grid
 * @param {object} childrens
 * @author [Ender Bonnet](https://github.com/enbonnet)
 */
const Container = ({ children }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-half">{children}</div>
    </div>
  );
};

export default Container;
