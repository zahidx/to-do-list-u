"use client";
import { useEffect } from "react";

export default function Features() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "transition-opacity", "duration-1000");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 sm:p-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 fade-in opacity-0">
          Features of the To-Do List App
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center fade-in opacity-0">
          Discover the powerful features that make our To-Do List app your perfect productivity companion.
        </p>

        {/* Feature Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-gray-600 fade-in opacity-0">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Task Prioritization
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Organize your tasks based on priority levels like Low, Medium, High, and Urgent to stay focused on what matters most.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-gray-600 fade-in opacity-0">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Dark Mode Support
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Switch effortlessly between light and dark modes to ensure a comfortable experience in any lighting condition.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-gray-600 fade-in opacity-0">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Responsive Design
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Enjoy a seamless experience across all devices, including mobile phones, tablets, and desktops.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-gray-600 fade-in opacity-0">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Intuitive Interface
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              A user-friendly interface ensures you can add, edit, and manage tasks effortlessly with just a few clicks.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-gray-600 fade-in opacity-0">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Flexible Task Management
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Easily add, delete, and reorder tasks to customize your to-do list based on your changing needs.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-gray-600 fade-in opacity-0">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Customizable Categories
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Group tasks into custom categories for better organization and a clearer overview of your goals.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center fade-in opacity-0">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Ready to boost your productivity? Start using the To-Do List app today!
          </p>
        </div>
      </div>
    </div>
  );
}
