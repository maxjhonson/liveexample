import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import React, { useEffect, useState } from "react";
import NewPostDescriptionEditor from "./Editor/NewPostDescriptionEditor";
import Post from "./PostDisplay/Post";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [tags, setTags] = useState("");
  const [JSFiddleUrl, setJSFiddleUrl] = useState("");
  const [hasCss, setHasCss] = useState(false);
  const [hasHtml, setHasHtml] = useState(false);
  const [hasJs, setHasJs] = useState(false);

  useEffect(() => {});

  return (
    <div className="ui equal width celled grid">
      <div className="column">
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label>Explanations</label>
            <NewPostDescriptionEditor
              editorState={editorState}
              setEditorState={setEditorState}
            />
          </div>
          <div className="field">
            <label>Tags divided by coma (,)</label>
            <div className="ui right labeled left icon input">
              <i className="tags icon"></i>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                type="text"
                placeholder="HTML, JS, React"
              ></input>
              <a className="ui tag label">Add tag</a>
            </div>
          </div>
          <div className="field">
            <label>JSFiddle URL</label>
            <div className="ui labeled input">
              <div className="ui label">http://</div>
              <input
                value={JSFiddleUrl}
                onChange={(e) => setJSFiddleUrl(e.target.value)}
                type="text"
                placeholder="https://jsfiddle.net/user/example/"
              ></input>
            </div>
          </div>
          <div className="inline fields">
            <label>Languajes to display</label>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  value={hasHtml}
                  onChange={(e) => setHasHtml(e.target.value)}
                  name="html"
                ></input>
                <label>HTML</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  value={hasCss}
                  onChange={(e) => setHasCss(e.target.value)}
                  name="css"
                ></input>
                <label>CSS</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  value={hasJs}
                  onChange={(e) => setHasJs(e.target.value)}
                  name="js"
                ></input>
                <label>JS</label>
              </div>
            </div>
          </div>
          <button className="ui primary button" type="sumit">
            Save your Post
          </button>
        </form>
      </div>
      <div className="column">
        <Post
          title={title}
          editorState={editorState}
          tags={tags}
          JSFiddleUrl={JSFiddleUrl}
          hasCss={hasCss}
          hasHtml={hasHtml}
          hasJs={hasJs}
        />
      </div>
    </div>
  );
};

export default NewPost;
