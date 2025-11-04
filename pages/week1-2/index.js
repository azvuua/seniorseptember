
import React from 'react';
import { useRouter } from 'next/router';

const projects = [
  {
    id: 1,
    title: "Personal Website",
    description: "A responsive portfolio website built with Next.js and TailwindCSS.",
    image: "https://i.imgur.com/0bXhzxE.jpg",
    link: "/ind2", 
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Full-stack online store built with React, Node.js, and MongoDB.",
    image: "https://i.imgur.com/vP7Z1zQ.jpg",
    link: "/ind2",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity app to manage daily tasks, with login and cloud storage.",
    image: "https://i.imgur.com/K7Q0pKb.jpg",
    link: "/ind2",
  },
];

const skills = ["React", "Next.js", "TailwindCSS", "JavaScript", "Node.js", "MongoDB"];

export default function Portfolio() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-900">Skills</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-600">
          I am a passionate developer with experience in building responsive web applications using modern technologies like React, Next.js, and TailwindCSS. I enjoy creating clean, functional, and user-friendly interfaces.
        </p>
      </section>

      <section id="projects" className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl cursor-pointer transition"
              onClick={() => router.push(project.link)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-1">{project.description}</p>
              <span className="inline-block mt-3 text-blue-600 font-medium hover:underline">
                View Project
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
