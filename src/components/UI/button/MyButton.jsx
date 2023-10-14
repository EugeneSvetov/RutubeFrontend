import React from 'react';
import '../../../tailwind.output.css';

const MyButton = ({...props}) => {
    return (
        <button
            className="text-white bg-blue-700 hover:bg-blue-800 font-bold rounded-lg  px-5 py-2"
            {...props}
        >
            {props.value}
        </button>
    );
};

export default MyButton;