import Link from "next/link";
import React from "react";
import { prisma } from "@/db";
import TodoItem from "../todoitem";

// async function createTodo(data: FormData) {
//   "use server";

//   const title = data.get("title")?.valueOf();
//   if (typeof title !== "string" || title.length === 0) {
//     throw new Error("Invalid Title");
//   }

//   await prisma.todo.create({ data: { title, complete: false } });
// }

interface ModalProps {
  modal: {
    open: boolean;
  };
}

const TodoForm: React.FC<ModalProps> = ({ modal }) => {
  if (!modal.open) return null;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
          {/* Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}

          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <header className="flex justify-between mb-4 items-center">
                <h1 text-2x1>New</h1>
              </header>
              <form className="Flex gap-2 flex-col">
                <input
                  type="text"
                  name="title"
                  className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                />
                <div className="flex gap-1 justify-end">
                  <Link
                    href=".."
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                  >
                    Cancel
                  </Link>

                  <button
                    type="submit"
                    className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
