import TodoItem from "@/components/todoitem";
import { AddTodoButton } from "@/components/addtodobutton";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Todo() {
  const todos = await getTodos();

  return (
    <div className="">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <ul className="">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
        <AddTodoButton />
      </div>
    </div>
  );
}
