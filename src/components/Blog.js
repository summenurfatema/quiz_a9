import React from 'react';
import { useState } from 'react';
import Nav from './Nav';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};
const Blog = () => {
    return (
        <div>
            <Nav></Nav>

            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">

                <div class="space-y-4">
                    <Item title="What is the purpose of react router?">
                        React Router is a standerd library for routing in React ,which contains different roots/components and allow to changing the webpage's URL and keep the UI in sync with URL.
                    </Item>
                    <Item title="How does context API works?">
                        Context API is like moving 'props'(properties) from grandparent to child to parent and so on.It's alternative name is 'Prop driling'. By using it we can share data from one component to other components very easily.
                    </Item>
                    <Item title="What is useRef?">
                        useRef is like a box that can hold multable value in its current properties.useRef creates a plain JavaScript object.The returned object will presist for the full lifetime of the component.
                    </Item>
                </div>

            </div>
        </div>

    );
};

export default Blog;
