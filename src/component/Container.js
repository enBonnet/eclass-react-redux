import React from "react";

const Container = ({ children }) => {
  return (
    <div className="columns is-centered">
      <div className="column is-half">{children}</div>
    </div>
  );
};

export default Container;
