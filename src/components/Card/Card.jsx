import React from "react";
import Labels from "../Labels/Labels";
import Tags from "../Tags/Tags";

const Card = () => {
  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h4></h4>
          <Labels />
        </div>
        <div>
          <div>
            <h3></h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Tags />
        </div>
      </div>
    </li>
  );
};

export default Card;
