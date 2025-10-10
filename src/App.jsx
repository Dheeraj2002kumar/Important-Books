// src/App.jsx

import React, { useState } from "react";
import "./ImportantBooks.css";
import Headers from "./Header";

const books = [
  { name: "HTML Handbook", path: "/books/html-handbook.pdf" },
  {
    name: "Next.js Pages Router Handbook",
    path: "/books/nextjs-pages-router-handbook.pdf",
  },
  { name: "Alpine.js Handbook", path: "/books/alpine-handbook.pdf" },
  { name: "HTMX Handbook", path: "/books/htmx-handbook.pdf" },
  { name: "TypeScript Handbook", path: "/books/typescript-handbook.pdf" },
  { name: "React Handbook", path: "/books/react-handbook.pdf" },
  { name: "SQL Handbook", path: "/books/sql-handbook.pdf" },
  { name: "Git Cheat Sheet", path: "/books/git-cheat-sheet.pdf" },
  { name: "Laravel Handbook", path: "/books/laravel-handbook.pdf" },
  { name: "Express Handbook", path: "/books/express-handbook.pdf" },
  { name: "Swift Handbook", path: "/books/swift-handbook.pdf" },
  { name: "Go Handbook", path: "/books/go-handbook.pdf" },
  { name: "PHP Handbook", path: "/books/php-handbook.pdf" },
  { name: "Python Handbook", path: "/books/python-handbook.pdf" },
  {
    name: "Linux Commands Handbook",
    path: "/books/linux-commands-handbook.pdf",
  },
  { name: "C Handbook", path: "/books/c-handbook.pdf" },
  { name: "JavaScript Handbook", path: "/books/js-handbook.pdf" },
  { name: "CSS Handbook", path: "/books/css-handbook.pdf" },
  { name: "Node.js Handbook", path: "/books/node-handbook.pdf" },
  {
    name: "Software_Engineering_Principles",
    path: "/books/Software_Engineering_Principles.pdf",
  },
];

const DataScienceBooks = [
  {
    name: "Introduction to Machine Learning",
    path: "/books/INTRODUCTION-TO-MACHINE-LEARNING_Alex_Smola.pdf",
  },
  {
    name: "Deep Learning",
    path: "/books/deep-learning-material-dept-ece-ase-blr-1.pdf",
  },
  {
    name: "Deep Learning Adaptive Compution and Machine Learning",
    path: "/books/Deep-learning_ adaptive-computation-and-machine-learning.pdf",
  },
];

const QuantitativeAptitude = [
  {
    name: "Quantitative Aptitude",
    path: "/books/Quantitative_Aptitude.pdf",
  },
  {
    name: "Mixture and Alligation",
    path: "/books/Mixture_and_Alligation__06_pages.pdf",
  },
  {
    name: "Data Interpretation",
    path: "/books/Data-Interpretation-Data-Sufficiency-and-Comprehension.pdf",
  },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Headers />
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode"}
        </button>
      </div>
      <div className="container">
        <h1 className="heading">Programming Language</h1>
        <ul className="book-list">
          {books.map((book, index) => (
            <li key={index}>
              <a href={book.path} target="_blank" rel="noopener noreferrer">
                ✔️{book.name}
              </a>
            </li>
          ))}
        </ul>
        <h1 className="heading">Data Science Books</h1>
        <ul className="book-list">
          {DataScienceBooks.map((book, index) => (
            <li key={index}>
              <a href={book.path} target="_blank" rel="noopener noreferrer">
                ✔️{book.name}
              </a>
            </li>
          ))}
        </ul>

        <h1 className="heading">Quantitative Aptitude</h1>
        <ul className="book-list">
          {QuantitativeAptitude.map((book, index) => (
            <li key={index}>
              <a href={book.path} target="_blank" rel="noopener noreferrer">
                ✔️{book.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
