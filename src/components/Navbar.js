import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <nav className="border-b-2 border-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center justify-between">
                            <span className="flex-shrink-0">
                                <Link to="/">
                                    <img
                                        className="h-8 w-8"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt=""
                                    />
                                </Link>
                            </span>
                            <span className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="/about"
                                        className="bg-transparent-100 hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About
                                    </Link>

                                    <Link className="bg-transparent-100 hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                                        Team
                                    </Link>

                                    <Link className="bg-transparent-100 hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                                        Projects
                                    </Link>

                                    <Link className="bg-transparent-100 hover:bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                                        Contact
                                    </Link>
                                </div>
                            </span>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden bg-gray-100" id="mobile-menu">
                            <div
                                ref={ref}
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <Link
                                    to="/about"
                                    className="hover:bg-gray-700 text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </Link>

                                <Link className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Team
                                </Link>

                                <Link className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Projects
                                </Link>

                                <Link className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
}
