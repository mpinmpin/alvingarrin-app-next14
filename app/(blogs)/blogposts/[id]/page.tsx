// app/blogs/[id]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "The blog",
  };

async function getData(id: string) {
  // const res = await fetch(`https://alvingarrin.vercel.app/blogs/api/${id}`);
  const res = await fetch(`http://localhost:3000/blogs/api/${id}`);
  
  if (!res.ok) {
    notFound();
  }
 
  return res.json();
}

export async function generateStaticParams() {
  // const res = await fetch('https://alvingarrin.vercel.app/blogs/api');
  const res = await fetch('http://localhost:3000/blogs/api');
  const blogs = await res.json();
 
  return blogs.map((blog: { id: number }) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const blog = await getData(params.id);

  return (
    <main>
      <div>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <div>{blog.body}</div>
      </div>
    </main>
    
  );
}