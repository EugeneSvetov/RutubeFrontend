import React from 'react';

const MyFileInput = ({text, children, ...props}) => {
    return (
        <div>
            <input
                type={"file"}
                className="block w-full text-sm text-blue-900 border border-black-300 rounded-lg cursor-pointer bg-blue-50 "
                aria-describedby="file_input_help"
                {...props}
                required
            />
            <p className="mt-1 text-sm text-gray-500" id="file_input_help">{text}</p>
        </div>
    );
};

export default MyFileInput;