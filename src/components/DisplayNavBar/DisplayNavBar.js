import React from "react";

const DisplayNavBar = (props) => {
  let { menu, path } = props.items;
  return (
    <div>
      <li className="mr-12 text-white">
        <a href={path}>{menu}</a>
      </li>
    </div>
  );
};

export default DisplayNavBar;
