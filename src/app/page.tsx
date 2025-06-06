// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiReactos, // react native alternative icon (there's no direct react native icon, react icon used)
  SiNextdotjs,
  SiGithub,
  SiMysql, // for SQL, MySQL icon
} from "react-icons/si";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Python", icon: <SiPython className="text-green-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "React Native", icon: <SiReactos className="text-cyan-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget; // Save form reference

    setLoading(true);

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mvgrzozj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset(); // reset after submission success
    }

    setLoading(false);
  }

  return (
    <main className="bg-gray-900 text-white">
      {/* === Hero Section === */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="flex flex-col items-center space-y-6 text-center max-w-2xl">
          <div className="w-40 h-40 relative">
            <Image
              src="/my-portfolio.jpg"
              alt="Profile picture"
              fill
              className="rounded-full border-4 border-emerald-700 object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold">
            Hi, I&apos;m <span className="text-emerald-700">Jerome</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            A Computer Engineer who loves to code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* === About Section === */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-emerald-500">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/my-self-coastal-clean-up.jpg"
                alt="Jerome"
                width={400}
                height={400}
                className="rounded-xl border-4 border-emerald-700 object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 text-gray-300 space-y-4">
              <p>
                Hey, I&apos;m Jerome — a Computer Engineer who&apos;s pretty
                much happy anywhere there&apos;s code.
              </p>
              <p>
                I specialize in front-end development using React and Next.js,
                and I love combining clean design with powerful functionality.
              </p>
              <p>
                I&apos;m always up for learning something new, picking up random
                tech skills, or just figuring stuff out as I go. I like
                challenges — especially the kind that come with debugging at 2
                AM.
              </p>
              <p>
                Outside of coding, I&apos;m really into anime. Shows like{" "}
                <em>Steins;Gate</em>, <em>My Hero Academia</em>, and{" "}
                <em>Dr. Stone</em> hit that perfect mix of science, emotion, and
                hype. They kinda inspire how I think about creativity and logic,
                too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Skills Section === */}
      <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {skills.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center space-y-2 hover:text-emerald-500 transition duration-300"
            >
              <div className="text-5xl">{icon}</div>
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-sm text-gray-400">Intermediate</p>
            </div>
          ))}
        </div>
      </section>

      {/* === Projects Section === */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        {/* Video container */}
        <div className="relative max-w-4xl mx-auto h-[400px] overflow-hidden rounded-lg shadow-lg mb-6">
          <video
            src="/videos/turtlebyte-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Description below the video */}
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">TurtleByte</h3>
          <p className="text-gray-300 mt-2">
            TurtleByte is a robotic kit platform that introduces basic
            programming logic to children through tangible coding. It uses cards
            to represent coding functions, displayed in the mobile app. The
            robot executes the code based on the logic provided.
          </p>
        </div>
      </section>

      {/* === Contact Section === */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-700 hover:bg-emerald-600 w-full py-3 rounded font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success Modal */}
        {submitted && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="mt-2">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
