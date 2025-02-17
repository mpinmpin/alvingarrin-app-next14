// app/blogposts/page.tsx

import styles from './page.module.css'

import Link from 'next/link';
import { Metadata } from "next";
import DeleteBlog from "@/components/DeleteBlog";


export const metadata: Metadata = {
    title: "Blogs",
    description: "Lists of blogs",
  };

async function getBlogs() {
  try {
    // const res = await fetch('https://alvingarrin.vercel.app/blogs/api', {
    //   cache: "no-store",
    // });
    const res = await fetch('http://localhost:3000/blogposts/api', {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
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
        <div className={styles.BlogList}>
          <h2>Blogs</h2>
          {blogs.map(
						(blog: {
              id: string; 
              title: string; 
              author: string;
							}) => (
            <div className={styles.BlogPreview} key={blog.id}>
              <Link href={`/blogposts/${blog.id}`}>
                <h2>{blog.title}</h2>
              </Link>
              <div className={styles.BlogPreviewBody}>
                <p>Written by {blog.author}</p>
                <DeleteBlog id={blog.id}/>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </main>
    
  );
}