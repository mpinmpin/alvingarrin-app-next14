'use client'

import Link from 'next/link';
import React from 'react';
// import ThemeToggler from './ThemeToggler';

const Navbar = () => {

    const showSidebar = () => {
			const sidebar = document.querySelector<HTMLElement>('.sidebar');
			if (sidebar) {
					sidebar.style.display = 'flex';
				}
    };
      
    const hideSidebar = () => {
			const sidebar = document.querySelector<HTMLElement>('.sidebar');
			if (sidebar) {
					sidebar.style.display = 'none';
				}
    };

    return ( 
			<nav>
				<ul className="navbar">
					<div className="page-title">
						<Link href="/"><h1>0_0</h1></Link>
					</div>           
					<div className="links">
						<div className="dropdown hideOnMobile">
							<button className="dropbtn">Simple Apps
							</button>
							<div className="dropdown-content">
							<Link href="/weatherapp">Weather App</Link>
							<Link href="/calculator">Calculator</Link>
							<Link href="/bmicalculator">BMI Calculator</Link>
							{/* <Link href="/counter">Simple Counter</Link> */}
							</div>
						</div>
						<div className="dropdown hideOnMobile">
							<button className="dropbtn">Blogs
							</button>
							<div className="dropdown-content">
								<Link href="/blogposts">Blogs Page</Link>
								<Link href="/create">Create New Blog</Link>
							</div>
						</div>
						<div className="dropdown  hideOnMobile">
							<Link href="/about">About</Link>
						</div>
						<div className="dropdown">
							{/* <ThemeToggler /> */}
						</div>
						<li className="menu-button" onClick={showSidebar}>
							<a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
								<path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
							</a>
						</li>
					</div>
			</ul>

			<ul className="sidebar">
				<div className= "close-sidebar" onClick={hideSidebar}>
					<a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
						<path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
					</a>
				</div>
				<div className="links">
					<div className="dropdown">
						<button className="dropbtn">Simple Apps
						</button>
						<div className="dropdown-content">
							<Link href="/weatherapp">Weather App</Link>
							<Link href="/calculator">Calculator</Link>
							<Link href="/bmicalculator">BMI Calculator</Link>
							{/* <Link href="/counter">Simple Counter</Link> */}
						</div>
					</div>
					<div className="dropdown">
						<button className="dropbtn">Blogs
						</button>
						<div className="dropdown-content">
							<Link href="/blogposts">Blogs Page</Link>
							<Link href="/create">Create New Blog</Link>
						</div>
					</div>
					<div className="dropdown">
						<div className="dropbtn">
							<Link href="/about">About</Link>
						</div>
					</div>
						<div className="dropdown">
							{/* <ThemeToggler /> */}
						</div>
					</div>
				</ul>
			</nav>
        
     );
}
 
export default Navbar;