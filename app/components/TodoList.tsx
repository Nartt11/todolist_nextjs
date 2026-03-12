"use client";
import { useState } from "react";
import Task from "../Task.type";
import NewTask from "./NewTask";
import TaskItem from "./TaskItem";

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "task 1", completed: false },
    { id: 2, name: "task 2", completed: true },
  ]);
  const addNewTask = (name: string) => {
    const newTask: Task = {
      id: Date.now(),
      name,
      completed: false,
    };
    console.log(newTask);
    setTasks((prev) => [...prev, newTask]);
  };

  console.log(tasks.filter((task) => task.id === 1));

  const toggleTaskCompetion = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="border border-gray-300 rounded-2xl p-6 w-full max-w-md shadow-lg flex flex-col gap-3">
      <h2 className="font-bold text-lg flex justify-center uppercase">
        to do list
      </h2>
      <NewTask addNewTask={addNewTask} />
      <div>
        <h5>My Tasks</h5>
        {tasks.length === 0 ? (
          <p className="text-sm text-gray-500">No tasks yet</p>
        ) : (
          <div className="flex flex-col gap-2 mt-2">
            {tasks.map((task: Task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskCompetion={toggleTaskCompetion}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
