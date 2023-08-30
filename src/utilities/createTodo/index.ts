"use server";
import { prisma } from "@/db";

export async function createTodo(formEntry: string) {
  const title = formEntry;
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
}

export default createTodo;
