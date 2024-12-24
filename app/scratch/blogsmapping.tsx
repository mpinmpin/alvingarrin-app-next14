// page.tsx
'use client'


// app/blogposts/page.tsx

import Link from 'next/link';
import { Metadata } from "next";
import DeleteBlog from "@/components/DeleteBlog";


// export const metadata: Metadata = {
//     title: "Scratch",
//     description: "Scratch",
//   };

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

// const handleClick= () => {
//   console.log("clicked")
// }

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
              <div>
                <h2>Blogs</h2>
                {blogs.map(
                  (blog: {
                    id: string; 
                    title: string; 
                    author: string 
                    }) => (
                  <div key={blog.id}>
                    <h1>{blog.id}</h1>
                    <Link href={`/blogposts/${blog.id}`}>
                      <h2>{blog.title}</h2>
                    </Link>
                    <div>
                      <p>Written by {blog.author}</p>
                    </div>
                    <div>
                      <p>length: {blogs.length}</p>
                  </div>
              </div>
            ))}
            {/* <button className='button-global' onClick={handleClick}>click here</button> */}
          </div>
        )}
      </div>
    </main>
    
  );
}