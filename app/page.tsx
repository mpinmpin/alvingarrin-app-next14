import Link from 'next/link';

export default function Home() {
  return (
    <main >
      <div className="home">
        <div>
          <h2>Hi, I&lsquo;m Alvin</h2>
          <h3>Hacker and Web Developer</h3>
          <p>I build and design web apps and sites. I work with HTML5, CSS3, TypeScript, and Next.js.</p>
          <p><Link className="home-about" href="/about">More about me..</Link></p>
        </div>
      </div>
    </main>
  );
}
