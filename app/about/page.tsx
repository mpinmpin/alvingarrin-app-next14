import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Alvin Garrin",
    description: "About me",
  };

const About = () => {
    return ( 
        <main>
            <div className="about">
                <h2>About me</h2>
                <p>Hi, I&lsquo;m Alvin Garrin, a 32 y/o web developer from Depok, Indonesia.</p>
                <p>I&lsquo;m a web developer (and programming) enthusiast for over the last 22 months, working with TypeScript, HTML5, CSS3, React, and Next. I have built simple apps here like weather app, blog pages and BMI calculator. I might work with larger projects in the near future.</p>
                <p>I also have strong interest in Data Science. I use Python and Scikit-learn in this regard.</p>
                <p>Aside from my recent interest in programming, I&lsquo;ve been freelancing as math/physics/chemistry private tutor for mid-high school students for over 9 years.</p>
                <p>Graduated in 2014, I also hold Bachelor of Engineering in Materials Engineering from Bandung Institute of Technology.</p>
            </div>
        </main>
     );
}
 
export default About;