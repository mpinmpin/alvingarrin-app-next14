// app/blogposts/[id]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "The blog",
  };

async function getData(id: string) {
  // const res = await fetch(`https://alvingarrin.vercel.app/blogposts/api/${id}`);
  const res = await fetch(`http://localhost:3000/blogposts/api/${id}`);
  
  if (!res.ok) {
    notFound();
  }
 
  return res.json();
}

export async function generateStaticParams() {
  // const res = await fetch('https://alvingarrin.vercel.app/blogposts/api');
  const res = await fetch('http://localhost:3000/blogposts/api');
  const blogs = await res.json();
 
  return blogs.map((blog: { id: number }) => ({
    id: blog.id.toString(),
  }));
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const blog = await getData(params.id);

  return (
    <main>
      <div className="blog-details">
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div className='blog-paragraph'>{blog.body}</div>
				</article>
      </div>
    </main>
    
  );
}