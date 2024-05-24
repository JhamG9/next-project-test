"use client";

import Link from "next/link";
import React from "react";

// React Client Component
const PostCard = ({ post }) => {
  return (
    <div>
      <h3>
        <Link href={`/posts/${post.id}`}>
          {post.id} - {post.title}
        </Link>
      </h3>
      <p>{post.body}</p>
      <button
        onClick={() => {
          alert("On Click funcionando");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default PostCard;
