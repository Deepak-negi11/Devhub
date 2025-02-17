// components/Footer.tsx
import Link from "next/link";
import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-extrabold">DevHub</h2>
            <p className="mt-2 text-lg">
              A Developer Blogging &amp; Community Platform
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://x.com/deepak_negi__"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 001.88-2.35 8.59 8.59 0 01-2.7 1.03 4.27 4.27 0 00-7.27 3.9 12.1 12.1 0 01-8.8-4.46 4.27 4.27 0 001.32 5.7 4.23 4.23 0 01-1.93-.54v.06a4.27 4.27 0 003.43 4.18 4.28 4.28 0 01-1.92.07 4.27 4.27 0 003.98 2.96 8.55 8.55 0 01-5.3 1.83 8.64 8.64 0 01-1.02-.06 12.1 12.1 0 006.56 1.92c7.87 0 12.17-6.52 12.17-12.17 0-.19-.01-.38-.02-.57A8.71 8.71 0 0024 4.56a8.53 8.53 0 01-2.54.7z" />
              </svg>
            </a>
            <a
              href="https://github.com/Deepak-negi11/Devhub/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0112 6.8c.85.004 1.71.115 2.5.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.84-2.33 4.69-4.55 4.94.36.31.68.93.68 1.88 0 1.36-.01 2.46-.01 2.79 0 .27.16.58.67.48A10.005 10.005 0 0022 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
            </a>
            <a
              href="deepaknegi108r@gamil.com"
              className="hover:text-blue-300 transition-colors"
              aria-label="Email"
            >
              <EnvelopeIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Features</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="/demo" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Demo</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/careers" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/press" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Press</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/help" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Help Center</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies" legacyBehavior>
                  <a className="hover:text-gray-300 transition-colors">Cookie Policy</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

        <div className="mt-10 border-t border-indigo-400 pt-6">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {currentYear} DevHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
