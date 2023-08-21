"use client";

import React from "react";
import { useState } from "react";
import TodoForm from "../todofolder";

export function AddTodoButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="w-full outline text-center back hover:bg-gray-100 py-4"
      >
        <h1 className="">Add todo</h1>
      </button>
      <TodoForm modal={{ open: openModal }} />
    </div>
  );
}
