import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-4">Hey, I'm Ravi Sharma 👋</h1>
        <p className="text-xl mb-6">
          I'm a <strong>Data Scientist</strong> passionate about solving real-world problems with data.
          With a strong technical foundation and a business mindset, I create impactful AI and ML solutions.
        </p>

        <h2 className="text-3xl font-semibold mt-6">🚀 What I Do</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Build data-driven solutions for business impact</li>
          <li>Develop machine learning models using TensorFlow, PyTorch, and Scikit-learn</li>
          <li>Analyze and visualize data with Pandas, SQL, and Tableau</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-6">✨ Key Skills</h2>
        <p className="mt-2">Python, Java, C++, SQL, Machine Learning, Deep Learning, AWS, Tableau</p>

        <h2 className="text-3xl font-semibold mt-6">🌟 Projects I'm Proud Of</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <a
              href="https://github.com/zravii/Google-Earth-Predicts-School-Success"
              className="text-yellow-300 underline"
            >
              Google Earth Predicts School Success
            </a>
          </li>
          <li>
            <a href="https://github.com/zravii/EDA" className="text-yellow-300 underline">
              IU Student Well-being
            </a>
          </li>
          <li>
            <a href="https://github.com/zravii/Computer-Vision" className="text-yellow-300 underline">
              DRISHTI: Accessibility for All
            </a>
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mt-6">📧 Let's Connect</h2>
        <p>Email: <a href="mailto:ravishar@iu.edu" className="text-yellow-300 underline">ravishar@iu.edu</a></p>
        <a
          href="https://linkedin.com/in/ravi-sharma24"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-yellow-300 hover:text-white"
        >
          <FaLinkedin size={30} className="mr-2" /> LinkedIn
        </a>
      </motion.div>
    </div>
  );
}
