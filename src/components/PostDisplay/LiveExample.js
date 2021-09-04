import React from "react";

const LiveExample = ({ JSFiddleUrl }) => {
  const src = `${JSFiddleUrl}/embedded/result`;
  if (!JSFiddleUrl) return <div></div>;
  return (
    <iframe
      width="100%"
      height="300"
      src={src}
      allowfullscreen="allowfullscreen"
      allowpaymentrequest
      frameborder="0"
    ></iframe>
  );
};

export default LiveExample;
