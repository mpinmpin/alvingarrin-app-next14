'use client'

// add server components later

import { useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Alvin');
  const [isPending, setIsPending] = useState(false);
//   const history = useHistory();


// CHANGE the 'e' data type later
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

//     fetch('http://localhost:8000/blogs/', {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(blog)
//     }).then(() => {
//       console.log('new blog added');
//       setIsPending(false);
//       history.push('/blogspage');
//     })
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
						{!isPending && <button>Add Blog</button>}
						{isPending && <button disabled>Adding Blog...</button>}
					</form>
			</div>
		</main>
	);
}
 
export default Create;