import { useEffect, useState } from "react";
import "./App.css";
function Post(props) {
  const stylee = {
    border: "2px solid blue",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={{ ...stylee }}>
      <h4>Title:{props.post.title} </h4>
      <p>UserId:{props.post.userId} </p>
      <p>PostId: {props.post.id}</p>
    </div>
  );
}

function Posts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div className="newClass">
      <h3>Posts:{post.length}</h3>
      {post.map((posts) => (
        <Post post={posts}></Post>
      ))}
    </div>
  );
}

export default Posts;
