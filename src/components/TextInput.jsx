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

    return <div className="sm:col-span-6">
        <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
            {placeholder}
        </label>
        <div className="mt-2">
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`block w-full rounded-md border-2 px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 ${errorMessage ? "border-red-500" : "border-gray-300"
                    }`}
            />
            {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
    </div>;
}
