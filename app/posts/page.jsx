import PostCard from '@/components/PostCard';
import React from 'react';

const loadPosts = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 5000));

    return data;
}

// React Server Component
const Posts = async () => {
    const posts = await loadPosts();
    return (
    <div>
        {
            posts.map(post => (
                <PostCard post={post} key={post.id} />
            ))
        }
    </div>
  )
}

export default Posts;