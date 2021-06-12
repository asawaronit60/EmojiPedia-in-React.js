import React from "react";

export default function Details(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.eemoji}
        </span>
        <span> {props.ename}</span>
      </dt>
      <dd>{props.detail}</dd>
    </div>
  );
}
