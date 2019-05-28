import React from "react";
import queryString from "query-string";
export default function About({ location, match }) {
  const query = queryString.parse(location.search);
  const detail = query.detail === "true";
  return (
    <div>
      <h2>About {match.params.name}</h2>
      {detail && "detail:blah"}
    </div>
  );
}
