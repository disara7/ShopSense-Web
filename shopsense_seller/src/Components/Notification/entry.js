import React from "react";
import className from "classnames";

const Entry = ({ title, startedAt, percentage }) => (
  <li className="process">
    <span className="process-title">{title}</span>
    <span className="process-started-at">{startedAt}</span>
    <span className={className("process-percentage")}>
      <span
        style={{ width: `${percentage}%` }}
        className={className({
          incomplete: percentage < 100,
        })}
      >
        {percentage}
      </span>
    </span>
  </li>
);

export default Entry;
