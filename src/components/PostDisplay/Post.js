import { Editor, Entity } from "draft-js";
import React from "react";
import JSFiddleDisplay from "./JSFiddleDisplay";

const Post = ({ title, editorState, tags, JSFiddleUrl }) => {
  const renderedTags =
    tags.trim() !== ""
      ? tags.split(",").map((tag) => <a href="#">#{`${tag.trim()} `}</a>)
      : null;

  return (
    <div className="ui piled segment">
      <h2 class="ui header">{title}</h2>
      {renderedTags}
      <Editor editorState={editorState} readOnly={true} />
      <JSFiddleDisplay JSFiddleUrl={JSFiddleUrl} view={"result"} />
      <JSFiddleDisplay JSFiddleUrl={JSFiddleUrl} view={"html"} />
      <JSFiddleDisplay JSFiddleUrl={JSFiddleUrl} view={"css"} />
      <JSFiddleDisplay JSFiddleUrl={JSFiddleUrl} view={"js"} />
    </div>
  );
};

export default Post;
