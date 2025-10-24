import React from "react";

const Tag = ({ isFiltered }) => {
  return (
    <>
      {!isFiltered ? (
        <li>Tag</li>
      ) : (
        <li>
          Tag<button></button>
        </li>
      )}
    </>
  );
};

export default Tag;
