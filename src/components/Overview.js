import React from "react";

export default function Overview(props) {
  return (
    <div>
      <ul>
        {props.task.map((task, idx) => {
          return <li key={idx}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
