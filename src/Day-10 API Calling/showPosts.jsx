import { useEffect, useState } from "react";

const ShowPosts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => {
        console.log("Response Data: ", response);

        console.log("Step 3: Got Response data form API");
        setPosts(response);
      })
      .catch((err) => {
        console.log("Step 3: Got Error from API");
        console.log("Error : ", err);
        setPosts([]);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);

    // const result = 
  };

  console.log("1. Re-Rendering: ", posts);

  return (
    <div>
      <h1>My Posts</h1>
      <input
        className="input"
        type="text"
        placeholder="search keywords..."
        value={search}
        onChange={handleChange}
      />
      {/* {posts &&
        posts
          .filter((item) => item.name.includes(search))
          .map((post, id) => {
            return <div key={id}>{post.title} </div>;
          })} */}
      {posts.map((post, id) => {
        return <li key={id}>{post.title}</li>;
      })}
    </div>
  );
};

export default ShowPosts;
