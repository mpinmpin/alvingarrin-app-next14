// app/blogposts/[id]/page.tsx
import styles from './page.module.css'

import { notFound } from 'next/navigation';
import { Metadata } from "next";
import { mockBlogs } from './mockData';

export const metadata: Metadata = {
    title: "Blog",
    description: "The blog",
  };

async function getData(id: string) {
  // Use mock data during build
  // if (process.env.NODE_ENV === 'production') {
  //   const blog = mockBlogs.find((blog) => blog.id.toString() === id);
  //   if (!blog) notFound();
  //   return blog;
  // }

  // Use real API in development
  const res = await fetch(`https://alvingarrin.vercel.app/blogposts/api/${id}`);
  // const res = await fetch(`http://localhost:3000/blogposts/api/${id}`);
  
  if (!res.ok) {
    notFound();
  }
 
  return res.json();
}

export async function generateStaticParams() {
  // Use mock data during build
  // if (process.env.NODE_ENV === 'production') {
  //   return mockBlogs.map((blog) => ({
  //     id: blog.id.toString(),
  //   }));
  // }

  // Use real API in development
  const res = await fetch('https://alvingarrin.vercel.app/blogposts/api');
  // const res = await fetch('http://localhost:3000/blogposts/api');
  const blogs = await res.json();
 
  return blogs.map((blog: { id: number }) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const blog = await getData(params.id);

  return (
    <main>
      <div className={styles.BlogDetails}>
        <article>
          <h2 className='font-bold'>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className={styles.BlogParagraph}>{blog.body}</div>
        </article>
      </div>
    </main>
  );
}