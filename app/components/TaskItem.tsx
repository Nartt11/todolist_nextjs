import Link from "next/link";
import Task from "../Task.type";
import { useState } from "react";

interface TaskItemProps {
  task: Task;
  toggleTaskCompetion: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newName: string) => void;
}
export default function TaskItem({
  task,
  toggleTaskCompetion,
  deleteTask,
  editTask,
}: TaskItemProps) {
  const [newName, setNewName] = useState(task.name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setNewName(task.name);
  };
  const handleSave = () => {
    editTask(task.id, newName);
    setIsEditing(false);
  };
  return (
    <div className="flex items-center justify-between border-b p-2 space-x-4 ">
      <div className="flex flex-col gap-2">
        <div className="flex  items-center gap-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompetion(task.id)}
          />
          <Link
            href={`/${task.id}`}
            className={
              `font-medium` +
              (task.completed ? "line-through text-gray-500" : "")
            }
          >
            {task.name}
          </Link>
        </div>
        <div>
          {isEditing && (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border rounded-md p-1"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => (isEditing ? handleSave() : handleEdit())}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}
