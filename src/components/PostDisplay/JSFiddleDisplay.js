import React from "react";

const JSFiddleDisplay = ({ JSFiddleUrl, view }) => {
  const src = `${JSFiddleUrl}/embedded/${view}`;
  if (!JSFiddleUrl) return <div></div>;
  return (
    <iframe
      width="100%"
      height="300"
      src={src}
      allowfullscreen="allowfullscreen"
      allowpaymentrequest
      frameborder="0"
      resize="true"
    ></iframe>
  );
};

export default JSFiddleDisplay;
