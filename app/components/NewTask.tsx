"use client";

import { useState } from "react";

interface NewTaskProps {
  addNewTask: (name: string) => void;
}
export default function NewTask({ addNewTask }: NewTaskProps) {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim() === "") return;
    addNewTask(taskName);
    setTaskName("");
  };
  return (
    <div>
      <h2> Create new task</h2>
      <form className="flex gap-2" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="task name"
          className="border px-5 py-2 rounded-md placeholder:text-gray-500 placeholder:italic"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
