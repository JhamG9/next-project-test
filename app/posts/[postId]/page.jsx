import React, { Suspense } from "react";
import Posts from "../page";

const loadPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostPage = async ({ params }) => {
  const post = await loadPost(params.postId);

  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>

      <hr />

      <h3>Otras Publicaciones</h3>

      {/* Sirve para cargar datos de manera independiente sin afectar a los demas componentes */}
      <Suspense fallback={<div>Cargando publicaciones....</div>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default PostPage;
