import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
    >
      {isDarkMode ? <Moon size={20} className="text-yellow-400" /> : <Sun size={20} className="text-orange-500" />}
      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
};

export default DarkModeToggle;
