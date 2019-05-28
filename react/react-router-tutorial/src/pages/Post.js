import React from "react";

export default function Post({ match }) {
  return <div>포스트 {match.params.id}</div>;
}
