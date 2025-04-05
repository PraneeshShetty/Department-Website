import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'Github' },
];

const footerLinks = [
  {
    title: 'Department',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Faculty', href: '/faculty' },
      { label: 'Students', href: '/students' },
      { label: 'Research', href: '/research' },
      { label: 'Events', href: '/events' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Courses', href: '/courses' },
      { label: 'Projects', href: '/projects' },
      { label: 'Publications', href: '/publications' },
      { label: 'Alumni', href: '/alumni' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Support', href: '/support' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-blue-100">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Department Info */}
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 text-transparent bg-clip-text mb-4">
              AISE
            </h2>
            <p className="mb-4 text-sm text-blue-200">
              Department of Artificial Intelligence & Software Engineering.
              Pioneering the future through innovation and excellence.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-blue-300 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-blue-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-800/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-400">
          <p>© {new Date().getFullYear()} AISE Department. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
