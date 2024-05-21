import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { ButtonLink } from './Scroller';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-6 mt-40 footer-b">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between md:items-center">
          <div className="text-2xl font-semibold mb-6 md:mb-0">
          Alex
          </div>
          <div className="mb-6 md:mb-0 md:flex md:space-x-12">
            <ul className="space-y-4">
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText='Home' elementId='hero'/>
              </li>
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText='Previous Work' elementId='previouswork'/>
              </li>
              <li>
                <ButtonLink className="text-lg font-medium hover:text-gray-300" buttonText='Contact' elementId='contact'/>
              </li>
            </ul>
            <div className="flex space-x-6">
              <Link href="https://github.com/wachira954" target='_blank'>
                <FaGithub size={36}/>
              </Link>
              <Link href="https://www.linkedin.com/in/alex-gichohi-973359220/" target='_blank'>
                <FaLinkedin size={36}/>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
