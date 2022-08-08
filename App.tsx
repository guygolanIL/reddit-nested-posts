import * as React from 'react';
import { Posts } from './components/posts/Posts';
import './style.css';

export interface IPost {
  title: string;
  message: string;
  date: string;
  posts?: IPost[];
}

const posts: IPost[] = [
  {
    title: 'post 1',
    message: 'hello world',
    date: '20/07/1991',
    posts: [
      {
        title: 'post 1 sub1',
        message: 'bye world',
        date: '21/7/1991',
      },
      {
        title: 'post 1 sub2',
        message: 'bye universe',
        date: '22/8/1991',
        posts: [
          {
            title: 'wrong',
            message: 'you are wrong',
            date: '23/9/1991',
          },
        ],
      },
    ],
  },
  {
    title: 'post 2',
    message: 'yay yoog',
    date: '11/10/1993',
  },
];

export default function App() {
  return (
    <div className="App">
      <Posts posts={posts} />
    </div>
  );
}
