'use client';

import dynamic from 'next/dynamic';
import { Button } from '../ui/button';
import { Suspense } from 'react';

// Dynamically import the Globe component to avoid SSR issues with Three.js
const Globe = dynamic(() => import('../three/Globe'), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-40 h-40 rounded-full bg-blue-900/30 animate-pulse flex items-center justify-center">
        <div className="text-blue-300 text-sm">Loading 3D Globe...</div>
      </div>
    </div>
  ),
  ssr: false
});

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 pt-16">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_75%)]"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-white to-blue-300 text-transparent bg-clip-text leading-tight mb-6">
            AISE
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6 max-w-2xl">
            Department of Information science and Engineering
          </p>
          <p className="text-blue-300 mb-8 max-w-lg">
            Pioneering the future through cutting-edge research, innovation, and
            excellence in artificial intelligence and software engineering education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore Programs
            </Button>
            <Button variant="outline" className="bg-transparent border-blue-500 text-blue-300 hover:bg-blue-900/50">
              Meet Our Faculty
            </Button>
          </div>
        </div>

        {/* Globe visualization */}
        <div className="lg:w-1/2 relative h-[400px] md:h-[600px] w-full">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-blue-900/30 animate-pulse"></div>
            </div>
          }>
            <Globe className="w-full h-full" />
          </Suspense>

          {/* Stats overlay */}
          <div className="absolute top-1/4 right-1/4 bg-blue-900/20 backdrop-blur-md rounded-lg border border-blue-500/30 p-4 shadow-lg z-10">
            <p className="text-blue-200 text-sm">Students</p>
            <p className="text-white text-2xl font-bold">500+</p>
          </div>

          <div className="absolute bottom-1/4 left-1/4 bg-blue-900/20 backdrop-blur-md rounded-lg border border-blue-500/30 p-4 shadow-lg z-10">
            <p className="text-blue-200 text-sm">Research Projects</p>
            <p className="text-white text-2xl font-bold">50+</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-300"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </div>
  );
}
