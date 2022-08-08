import React from "react";
import { Popover } from "@headlessui/react";

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-12">
            <a
              href="/"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              Product
            </a>
            {/* <a href="/cart" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Cart
            </a> */}
            <a href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}
