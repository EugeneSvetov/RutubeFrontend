import React from 'react';
import '../../../tailwind.output.css';

const MyTextArea = ({children, ...props}) => {
    return (
        <textarea {...props} className="w-full rounded-lg border-1 px-5 py-2 placeholder:text-gray-400 focus:border-2 focus:ring-inset focus:border-indigo-600 ">
        </textarea>
    );
};

export default MyTextArea;