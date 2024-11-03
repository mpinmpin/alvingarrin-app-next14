"use client";

import { HiOutlineTrash } from "react-icons/hi";
import {Tooltip} from "@nextui-org/tooltip";
// import { useRouter } from "next/navigation";

export default function DeleteBlog() {
  const handleDelete = () => {
    const confirmed = confirm("Are you sure to delete this blog?");

    if (confirmed) {
      console.log("Delete button clicked");
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

//   export default function RemoveBtn({ id }) {
//     const router = useRouter();
//     const removeTopic = async () => {
//       const confirmed = confirm("Are you sure?");
  
//       if (confirmed) {
//         const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
//           method: "DELETE",
//         });
  
//         if (res.ok) {
//           router.refresh();
//         }
//       }
//     };