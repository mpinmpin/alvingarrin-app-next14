'use client'

import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="mt-[100px] text-center py-[100px] text-[13px]">
        © Copyright 2024 Alvin Garrin
        <div className="flex justify-center items-center">
          <Link href="https://github.com/mpinmpin" target="_blank" rel="noopener noreferrer">
            <DiGithubBadge className= "mx-auto" size={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/alvin-garrin-48164b2a5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className= "mx-auto" size={28} />
          </Link>
        </div>
      </footer>
    );
  }
   
  export default Footer;