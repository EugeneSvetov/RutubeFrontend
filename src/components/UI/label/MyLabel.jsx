import React from 'react';
import '../../../tailwind.output.css';

const MyLabel = ({children, ...props}) => {
    return (
        <label {...props}
               className="block text-sm font-medium leading-6 text-gray-900">
            {props.value}
        </label>
    );
};

export default MyLabel;