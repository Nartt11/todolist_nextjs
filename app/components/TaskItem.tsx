import Link from "next/link";
import Task from "../Task.type";

interface TaskItemProps {
  task: Task;
  toggleTaskCompetion: (id: number) => void;
}
export default function TaskItem({ task, toggleTaskCompetion }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between border rounded-md p-2 ">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompetion(task.id)}
        />
        <Link href={`/${task.id}`} className="font-medium">
          {task.name}
        </Link>
        <p> </p>
      </div>
      <div className="flex gap-2">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}
