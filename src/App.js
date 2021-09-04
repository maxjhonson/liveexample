import "./App.css";
import React, { useContext } from "react";
import BlogContex, { BlogProvider } from "./context/BlogContext";

import NewPost from "./components/NewPost";

function App() {
  const { data } = useContext(BlogContex);
  const post = null;
  return (
    <div className="ui segment">
      <NewPost />
      {/* <div className = "ui grid">
        <div className="two wide column">
        <PostMenuList  />
        </div>
        <div className="ten wide stretched  column"> 
        <h1>Simple list example</h1>
        <Explanation post={post} />
        <LiveExample url={data.selectedPost.onlineEditorUrl} />
        <SourceCodeList selectedPost={data.selectedPost} />
        <a href='#'>Try in JSFiddle</a>
        </div>
    </div> */}
    </div>
  );
}

export default App;
