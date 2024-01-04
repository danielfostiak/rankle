import React from "react";

const Response = ({ correctItemsCount }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>You got {correctItemsCount} items in the correct order.</p>
      </div>
    </div>
  );
};

export default Response;
