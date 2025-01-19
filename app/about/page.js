// pages/about.js
export default function About() {
    return (
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto  rounded-lg  p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
            About the To-Do List App
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The To-Do List app is a simple yet powerful tool designed to help you stay organized and productive. Whether you're managing daily tasks, planning a project, or setting priorities, this app ensures you never miss a beat.
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Easy-to-use interface for adding and managing tasks.</li>
            <li>Organize tasks based on priority levels: Low, Medium, High, and Urgent.</li>
            <li>Dark mode support for comfortable usage in low-light environments.</li>
            <li>Fully responsive design for seamless experience on mobile, tablet, and desktop.</li>
            <li>Customizable task categories to suit your workflow.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Why Choose This App?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            This app is tailored for users who value simplicity and efficiency. With features like priority-based task categorization and dark mode, it adapts to your needs, helping you focus on what truly matters.
          </p>
  
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            How to Use
          </h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Enter your task in the input field and select a priority level.</li>
            <li>Click the "Add" button to save the task to your list.</li>
            <li>Review your tasks and focus on the most important ones first.</li>
            <li>Mark tasks as complete or delete them as needed.</li>
          </ol>
  
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Ready to organize your life? Start using the To-Do List app today!
            </p>
          </div>
        </div>
      </div>
    );
  }
  