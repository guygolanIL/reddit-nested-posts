import * as React from 'react';
import { IPost } from '../../../App';
import './Post.css';

type PostProps = IPost;

export function Post({ title, date, message, posts }: PostProps) {
  return (
    <div>
      <h3>
        {title} {date}:
      </h3>
      <span>{message}</span>
      {posts && (
        <div className="subposts">
          {posts.map((post, idx) => (
            <Post
              key={idx}
              title={post.title}
              message={post.message}
              date={post.date}
              posts={post.posts}
            />
          ))}
        </div>
      )}
    </div>
  );
}
