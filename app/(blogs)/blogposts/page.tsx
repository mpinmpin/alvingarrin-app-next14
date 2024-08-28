// app/blogs/page.tsx

import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs",
    description: "Lists of blogs",
  };

async function getBlogs() {
  try {
    // const res = await fetch('https://alvingarrin.vercel.app/blogs/api', { next: { revalidate: 1 } });
    const res = await fetch('http://localhost:3000/blogs/api', { next: { revalidate: 1 } });
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <main>
      <div>
      {blogs.length === 0 ? (
        <div className="error-message">
          <p>Failed to fetch blogs. Please try again later.</p>
        </div>
      ) : (
        <div className="blog-list">
          <h2>Blogs</h2>
          {blogs.map((blog: { id: string; title: string; author: string }) => (
            <div className="blog-preview" key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    </main>
    
  );
}