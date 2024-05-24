import React from "react";

const loadPost = async(id) =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

const PostPage = async({ params }) => {
  const post = await loadPost(params.postId);
  
  return (
    <div>
      <h1>{post.id} {post.title}</h1>
      <p>{post.body}</p>      
    </div>
  );
};

export default PostPage;
