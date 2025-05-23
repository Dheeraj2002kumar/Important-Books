import React, { useState } from "react";
import "./ImportantBooks.css";

const books = [
    { name: "HTML Handbook", path: "/books/html-handbook.pdf" },
    { name: "Next.js Pages Router Handbook", path: "/books/nextjs-pages-router-handbook.pdf" },
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
    { name: "Linux Commands Handbook", path: "/books/linux-commands-handbook.pdf" },
    { name: "C Handbook", path: "/books/c-handbook.pdf" },
    { name: "JavaScript Handbook", path: "/books/js-handbook.pdf" },
    { name: "CSS Handbook", path: "/books/css-handbook.pdf" },
    { name: "Node.js Handbook", path: "/books/node-handbook.pdf" },
];

const ImportantBooks = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <div className="theme-toggle">
                <button onClick={toggleTheme}>
                    {darkMode ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode"}
                </button>
            </div>
            <div className="container">
                <h1>Important Books</h1>
                <ul className="book-list">
                    {books.map((book, index) => (
                        <li key={index}>
                            <a href={book.path} target="_blank" rel="noopener noreferrer">
                                {book.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ImportantBooks;
