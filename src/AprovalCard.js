import React from "react";

const AprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui besic green button">Approve</div>
          <div className="ui besic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default AprovalCard;
