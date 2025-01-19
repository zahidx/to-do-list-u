"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';

const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]); // Track completed tasks
  const [editingIndex, setEditingIndex] = useState(null); // To track which task is being edited
  const [priorityTasks, setPriorityTasks] = useState([]); // Track priority tasks

  // Load tasks from local storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const savedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks"));
    const savedPriorityTasks = JSON.parse(localStorage.getItem("priorityTasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
    if (savedCompletedTasks) {
      setCompletedTasks(savedCompletedTasks);
    }
    if (savedPriorityTasks) {
      setPriorityTasks(savedPriorityTasks);
    }
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    if (completedTasks.length > 0) {
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }
    if (priorityTasks.length > 0) {
      localStorage.setItem("priorityTasks", JSON.stringify(priorityTasks));
    }
  }, [tasks, completedTasks, priorityTasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const addPriorityTask = () => {
    if (task.trim()) {
      setPriorityTasks([...priorityTasks, task.trim()]);
      setTask("");
    }
  };

  const deleteTask = (index, isCompleted = false, isPriority = false) => {
    if (isCompleted) {
      const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
      setCompletedTasks(updatedCompletedTasks);
    } else if (isPriority) {
      const updatedPriorityTasks = priorityTasks.filter((_, i) => i !== index);
      setPriorityTasks(updatedPriorityTasks);
    } else {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index); // Set task to edit mode
  };

  const saveTask = (index, newTask) => {
    if (newTask.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask.trim(); // Update the task in the list
      setTasks(updatedTasks);
      setEditingIndex(null); // Clear the editing state
    }
  };

  const toggleComplete = (index) => {
    const taskToComplete = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove from tasks
    setTasks(updatedTasks);
    setCompletedTasks([...completedTasks, taskToComplete]); // Add to completed tasks
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gradient-to-r dark:from-[#0E1628] dark:to-[#380643] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="flex flex-col sm:flex-row w-full max-w-6xl space-y-8 sm:space-y-0 sm:space-x-8">

         {/* Add Task Section */}
<div className="bg-white h-80 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl w-full sm:w-1/2 flex flex-col space-y-6">
  <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">To-Do List</h1>
  <div className="flex gap-4 mb-6">
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Enter a new task"
      className="flex-1 p-4 border-2 border-indigo-500 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-500 text-black"
    />
    <button
      onClick={addTask}
      className="bg-indigo-600 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 dark:bg-indigo-700 dark:hover:bg-indigo-800"
    >
      Add
    </button>
  </div>

  {/* Static Priority Selection */}
  <div className="flex gap-4 mb-6">
    <button
      onClick={() => setTaskColor('bg-green-500')}
      className="w-full py-2 rounded-lg shadow-lg text-white bg-green-500 hover:bg-green-600 transition-all duration-300"
    >
      Low
    </button>
    <button
      onClick={() => setTaskColor('bg-yellow-500')}
      className="w-full py-2 rounded-lg shadow-lg text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300"
    >
      Medium
    </button>
    <button
      onClick={() => setTaskColor('bg-orange-500')}
      className="w-full py-2 rounded-lg shadow-lg text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300"
    >
      High
    </button>
    <button
      onClick={() => setTaskColor('bg-red-500')}
      className="w-full py-2 rounded-lg shadow-lg text-white bg-red-500 hover:bg-red-600 transition-all duration-300"
    >
      Urgent
    </button>
  </div>
</div>


          {/* Task List Section */}
          <div className="bg-indigo-200 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl w-full sm:w-1/2 flex flex-col space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Your Tasks</h2>
            {tasks.length > 0 ? (
              <ul className="space-y-4">
                {tasks.map((taskItem, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 border-l-4 border-indigo-500 rounded-lg shadow-md hover:shadow-lg hover:border-indigo-600 transition-all duration-300 dark:border-indigo-600"
                  >
                    {editingIndex === index ? (
                      <div className="flex gap-4 w-full">
                        <input
                          type="text"
                          defaultValue={taskItem}
                          onBlur={(e) => saveTask(index, e.target.value)} // Save when focus is lost
                          className="flex-1 p-2 border-2 border-indigo-500 rounded-lg dark:bg-gray-600 dark:text-white dark:border-gray-500 text-black"
                        />
                        <button
                          onClick={() => saveTask(index, document.querySelector(`#task-edit-${index}`).value)}
                          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 dark:bg-indigo-700 dark:hover:bg-indigo-800"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between w-full items-center">
                        <span className="text-lg text-black dark:text-white font-medium">{taskItem}</span>
                        <div className="flex gap-4">
                          <button
                            onClick={() => startEditing(index)}
                            className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-150 ease-in-out dark:text-indigo-400 dark:hover:text-indigo-500"
                          >
                            <PencilIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                          </button>
                          <button
                            onClick={() => deleteTask(index)}
                            className="text-red-500 hover:text-red-700 font-semibold transition duration-150 ease-in-out dark:text-red-400 dark:hover:text-red-500"
                          >
                            <TrashIcon className="w-5 h-5 text-red-500 dark:text-red-400" />
                          </button>
                          <button
                            onClick={() => toggleComplete(index)}
                            className="text-green-500 hover:text-green-700 font-semibold transition duration-150 ease-in-out dark:text-green-400 dark:hover:text-green-500"
                          >
                            <CheckIcon className="w-5 h-5 text-green-500 dark:text-green-400" />
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 text-lg">No tasks added yet. Start by adding one!</p>
            )}
          </div>

        </div>
      </div>

{/* Second Row Section */}
<div className="flex flex-col sm:flex-row items-center justify-center py-12 px-4 space-y-8 sm:space-y-0 sm:space-x-4 lg:-ml-[120]">

  {/* Priority Section */}
  <div className="p-6 sm:p-8 rounded-lg text-center w-full sm:w-[700] flex flex-col space-y-6">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Priority Levels</h2>

    {/* Priority Flags */}
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
      <li className="animate-move1 flex justify-center items-center p-4 bg-white dark:bg-gray-700 border-l-4 border-yellow-500 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600 transition-all duration-300 dark:border-yellow-600">
        <div className="flex items-center space-x-4">
          <span className="text-lg text-black dark:text-white font-medium">Priority-1</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">🟩</span>
        </div>
      </li>

      <li className="animate-move2 flex justify-center items-center p-4 bg-white dark:bg-gray-700 border-l-4 border-yellow-500 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600 transition-all duration-300 dark:border-yellow-600">
        <div className="flex items-center space-x-4">
          <span className="text-lg text-black dark:text-white font-medium">Priority-2</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">🟨</span>
        </div>
      </li>

      <li className="animate-move3 flex justify-center items-center p-4 bg-white dark:bg-gray-700 border-l-4 border-yellow-500 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600 transition-all duration-300 dark:border-yellow-600">
        <div className="flex items-center space-x-4">
          <span className="text-lg text-black dark:text-white font-medium">Priority-3</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">🟥</span>
        </div>
      </li>

      <li className="animate-move4 flex justify-center items-center p-4 bg-white dark:bg-gray-700 border-l-4 border-yellow-500 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-600 transition-all duration-300 dark:border-yellow-600">
        <div className="flex items-center space-x-4">
          <span className="text-lg text-black dark:text-white font-medium">Priority-4</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">🟦</span>
        </div>
      </li>
    </ul>
  </div>

  

  {/* Completed Tasks Section */}
  <div className="bg-indigo-200 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl w-full sm:w-[560px] flex flex-col space-y-6">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Completed Tasks</h2>
    {completedTasks.length > 0 ? (
      <ul className="space-y-4">
        {completedTasks.map((taskItem, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 border-l-4 border-green-500 rounded-lg shadow-md hover:shadow-lg hover:border-green-600 transition-all duration-300 dark:border-green-600"
          >
            <span className="text-lg text-black dark:text-white font-medium line-through">{taskItem}</span>
            <button
              onClick={() => deleteTask(index, true)}
              className="text-red-500 hover:text-red-700 font-semibold transition duration-150 ease-in-out dark:text-red-400 dark:hover:text-red-500"
            >
              <TrashIcon className="w-5 h-5 text-red-500 dark:text-red-400" />
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-500 dark:text-gray-400 text-lg">No tasks completed yet.</p>
    )}
  </div>
</div>

{/* Footer */}
<Footer />
{/* Animation Styles */}
<style jsx>{`
  @keyframes move1 {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(20px); }
  }

  @keyframes move2 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(20px); }
  }

  @keyframes move3 {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-20px); }
  }

  @keyframes move4 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .animate-move1 {
    animation: move1 3s ease-in-out infinite;
  }

  .animate-move2 {
    animation: move2 3s ease-in-out infinite;
  }

  .animate-move3 {
    animation: move3 3s ease-in-out infinite;
  }

  .animate-move4 {
    animation: move4 3s ease-in-out infinite;
  }
`}</style>
</div>

  );
};

export default Home;
