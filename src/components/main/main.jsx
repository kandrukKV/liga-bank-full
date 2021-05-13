import React from "react";
import PropTypes from "prop-types";
import "./main.scss";

const Main = ({mainTitle, children}) => {

  return (
    <main className="main">
      <h1 className="main__title">{mainTitle}</h1>
      {children}
    </main>
  );
};

Main.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Main;
