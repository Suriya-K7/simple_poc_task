import React from 'react';

export default function TextInput({
    id,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
    errorMessage = "",
}) {
    return (
        <div className="sm:col-span-6">
            <label 
                htmlFor={id} 
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
                {placeholder}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`
                        block w-full rounded-md px-4 py-2.5
                        text-gray-900 shadow-sm ring-1 ring-inset
                        ${errorMessage 
                            ? "ring-red-500 focus:ring-red-500" 
                            : "ring-gray-300 focus:ring-indigo-600"
                        }
                        placeholder:text-gray-400
                        focus:ring-2 focus:ring-inset
                        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
                        transition-colors duration-200
                        hover:ring-gray-400
                    `}
                />
                {errorMessage && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                        <svg 
                            className="h-4 w-4 mr-1" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                        {errorMessage}
                    </p>
                )}
            </div>
        </div>
    );
}
