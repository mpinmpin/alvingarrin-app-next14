import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Error 404",
    description: "Error",
  };
const NotFound = () => {
    return ( 
        <main>
            <div className="not-found">
                <h2>Sorry..</h2>
                <p>Error 404. This page cannot be found</p>
                <div className="not-found-link">
                    <Link href='/'>Back to the homepage</Link>
                </div>
          
            </div> 
        </main>
     );
}
 
export default NotFound;