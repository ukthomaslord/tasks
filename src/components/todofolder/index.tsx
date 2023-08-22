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
            <div className="bg-white sm:p-6 sm:pb-4">
              <form className="">
                <div className="static">
                  <input
                    type="text"
                    name="addTask"
                    id="addTask"
                    className="block w-full rounded-md border-2 py-2 pl-4 pr-20 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-xs sm:leading-6"
                    placeholder="Add a task"
                  />
                  <div className="flex items-center">
                    <button
                      id="sendTask"
                      name="sendTask"
                      className="h-full absolute right-8 bottom-0 top-1 rounded-md border-0 bg-transparent  text-gray-300 hover:text-indigo-600 sm:text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
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
