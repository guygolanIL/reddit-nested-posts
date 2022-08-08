import * as React from 'react';
import { IPost } from '../../../App';
import { SvgIcon } from '../../svg-icon/SvgIcon';
import { Avatar } from '../../svgs/Avatar';
import './Post.css';

type PostProps = IPost;

function PostHeader({ date, title }: { title: string; date: string }) {
  return (
    <div className="post-header">
      <SvgIcon icon={<Avatar />} />
      <h3 style={{ marginLeft: '5px' }}>
        {title} {date}:
      </h3>
    </div>
  );
}

export function Post({ title, date, message, posts }: PostProps) {
  return (
    <div>
      <PostHeader title={title} date={date} />
      <span style={{ marginLeft: '20px' }}>{message}</span>
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
