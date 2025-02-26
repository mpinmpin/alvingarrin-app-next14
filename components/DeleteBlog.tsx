'use client'

import { HiOutlineTrash } from "react-icons/hi";
import { Tooltip } from "@nextui-org/tooltip";
import { useRouter } from "next/navigation";

// interface DeleteBlogProps {
//   id: string;
// }

// export default function DeleteBlog({ id }: DeleteBlogProps): JSX.Element {
//     // ...
// }

export default function DeleteBlog({ id }: { id: string }): JSX.Element {
  const router = useRouter();

  const handleDelete = async (): Promise<void> => {
    const confirmed = confirm("Are you sure to delete this blog?");

    if (confirmed) {
      try {
        const res = await fetch(`https://alvingarrin.vercel.app/blogposts/api?id=${id}`, {
        // const res = await fetch(`http://localhost:3000/blogposts/api?id=${id}`, {
          method: "DELETE"
        });

        if (res.ok) {
          console.log("Blog deleted")
          router.refresh();
          // Consider showing a success notification to the user
        } else {
          // Handle error, e.g., show an error message to the user
          console.error("Error deleting blog:", res.statusText);
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error("Error deleting blog:", error);
        // Show an error message to the user
      }
    }
  };

  return (
    <Tooltip 
      content="Delete blog"
      placement="right-end"
      delay={0}
      closeDelay={0}
      style={{ fontSize: '12px' }}
    >
        <button 
          onClick={handleDelete}
          className="bg-transparent border-0 p-0 cursor-pointer"
        >
          <HiOutlineTrash size={20} style={{ stroke: 'red' }}/>
        </button>
    </Tooltip>
    
  );
}
