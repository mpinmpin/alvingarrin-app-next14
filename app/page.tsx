import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome | Alvin Garrin",
  description: "alvingarrin homepage",
};

export default function Home() {
  return (
    <main >
      <div className="home">
        <div>
          <h2>Hi, I&lsquo;m Alvin</h2>
          <h3>Web Developer</h3>
          <p>I build and design web apps and sites. I work with HTML5, CSS3, TypeScript, and Next.js.</p>
          <p><Link className="home-about" href="/about">More about me..</Link></p>
        </div>
      </div>
    </main>
  );
}
