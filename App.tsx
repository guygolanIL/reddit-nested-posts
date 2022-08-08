import * as React from 'react';
import './style.css';

interface Post {
  title: string;
  message: string;
  date: string;
  posts?: Post;
}

const posts: Post[] = [
  {
    title: 'post 1',
    message: 'hello world',
    date: '20/07/1991',
  },
];

export default function App() {
  return <div></div>;
}
