import './Posts.css';
import * as React from 'react';
import { IPost } from '../../App';
import { Post } from './post/Post';

function PostsHeader() {
  return <h1 style={{ fontFamily: 'sans-serif' }}>My Posts</h1>;
}

export function Posts({ posts }: { posts: IPost[] }) {
  return (
    <div id="posts">
      <PostsHeader />
      {posts.map((post, idx) => (
        <Post
          key={idx}
          title={post.title}
          date={post.date}
          message={post.message}
          posts={post.posts}
        />
      ))}
    </div>
  );
}
