// 'use client'
import Link from 'next/link';

const About = () => {
	return ( 
		<main>
			<div className="about">
				<h2>About me</h2>
				<p>Hi, I&lsquo;m Alvin Garrin, a 33 y/o self-taught programmer, hacker, bug bounty hunter, and web developer from Depok, Indonesia.</p>
				<p>I&lsquo;m a programming enthusiast for 3 years, working with TypeScript, HTML, CSS, and React/Next.js. I have built this site with simple apps like weather app, clicker minigame, blog pages and BMI calculator. I might work with larger projects in the near future.</p>
				<p>I also have strong interest in Data Science. I use Python and Scikit-learn in this regard. I have received a certification in <Link className="home-about " href="https://www.kaggle.com/learn/certification/mpinmpin/intermediate-machine-learning" target="_blank">Intermediate Machine Learning from Kaggle.com.</Link> But these days I'm more focused on hacking and bug bounty hacking. </p>
				<p>Aside from my recent interest in programming, I&lsquo;ve been freelancing as math/physics/chemistry private tutor for mid-high school students for over a decade.</p>
				<p>Graduated in 2014, I also hold Bachelor of Engineering in Materials Engineering from Bandung Institute of Technology.</p>
			</div>
		</main>
	);
}
 
export default About;