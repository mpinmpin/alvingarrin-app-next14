'use client'

// add server components later

import { useState } from "react";
import { useRouter } from "next/navigation";

const Create = () => {
	const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Alvin');
  const [isPending, setIsPending] = useState(false);
	const [blogAdded, setBlogAdded] = useState(false);

	const router = useRouter()



// CHANGE the 'e' data type later
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const blog = { id, title, body, author };

		setIsPending(true);

		if (!id || !title || !body || !author) {
      alert("Missing title/body/author.");
      return;
    }

		try {
			const res = await fetch("https://alvingarrin.vercel.app/blogposts/api", {
      // const res = await fetch("http://localhost:3000/blogposts/api", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (res.ok) {
				setIsPending(false);
				setBlogAdded(true)
        router.push("/blogposts");
      } else {
        throw new Error("Failed to create a blog");
      }
    } catch (error) {
      console.log(error);
    }
  }

	return (
		<main>
			<div className="create">
				<h2>Add a New Blog</h2>
					<form onSubmit={handleSubmit}>
						<label>Blog title:</label>
						<input 
							type="text" 
							placeholder="Put your blog title here"
							required 
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<label>Blog body:</label>
						<textarea
							required
							value={body}
							placeholder="Put your blog content here"
							onChange={(e) => setBody(e.target.value)}
						></textarea>
						<label>Blog author:</label>
						<select
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						>
							<option value="Alvin">Alvin</option>
							<option value="mario">Mario</option>
							<option value="yoshi">Yoshi</option>
						</select>
						<label>Insert a number:</label>
						<textarea
							required
							value={id}
							placeholder="e.g: '3244'"
							onChange={(e) => setId(e.target.value)}
						></textarea>

						{!isPending && <button>Add Blog</button>}
						{isPending && <button disabled>Adding Blog...</button>}
					</form>
					{blogAdded && <p>Blog is added</p>}

			</div>
		</main>
	);
}
 
export default Create;