"use client";

import Link from "next/link";
import React from "react";

// React Client Component
const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-900 p-10">
      <h3 className="text-xl font-bold mb-4">
        <Link href={`/posts/${post.id}`}>
          {post.id} - {post.title}
        </Link>
      </h3>
      <p className="text-slate-200">{post.body}</p>
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
