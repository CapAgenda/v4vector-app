"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { FaArrowRight, FaGithub, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl z-50">
      <div className="mx-auto flex justify-between gap-20 sm:flex-row align-middle items-center">
        <Logo />

        <div className="flex flex-row justify-center sm:justify-evenly align-right gap-8">
          <Link
            href="#v4v"
            className="text-black/90 no-underline hover:text-black md:block hidden"
          >
            V4V?
          </Link>

          <Link
            href="#illustrations"
            className="text-black/90 no-underline hover:text-black md:block hidden"
          >
            Illustrations
          </Link>

          <Link
            href="#vectorrequest"
            className="text-black/90 no-underline hover:text-black md:block hidden"
          >
            Request
          </Link>

          <Link
            href="#faq"
            className="text-black/90 no-underline hover:text-black md:block hidden"
          >
            FAQ
          </Link>

          <Link
            href="https://billing.stripe.com/p/login/5kA14J7C37wz2ty6oo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/90 no-underline hover:text-black md:block hidden items-center gap-1"
          >
            <span className="flex items-center">
              Sign in
              <FaArrowRight className="ml-1" />
            </span>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black/90 hover:text-black focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center my-4 md:hidden">
          <Link
            href="#v4v"
            className="text-black/90 no-underline hover:text-black py-4"
          >
            V4V?
          </Link>

          <Link
            href="#illustrations"
            className="text-black/90 no-underline hover:text-black py-4"
          >
            Illustrations
          </Link>

          <Link
            href="#vectorrequest"
            className="text-black/90 no-underline hover:text-black py-4"
          >
            Request
          </Link>

          <Link
            href="#faq"
            className="text-black/90 no-underline hover:text-black py-4"
          >
            FAQ
          </Link>

          <Link
            href="https://billing.stripe.com/p/login/5kA14J7C37wz2ty6oo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/90 no-underline hover:text-black flex flex-row items-center gap-1 py-2"
          >
            Sign in <FaArrowRight />
          </Link>
        </div>
      )}
    </nav>
  );
}
