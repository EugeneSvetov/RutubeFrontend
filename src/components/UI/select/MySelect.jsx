import React from 'react';
import '../../../tailwind.output.css';

const MySelect = ({selectedOption, handleChange, options}) => {
    return (
        <select
            className=" border-1 border-black-300 rounded-lg focus:border-blue-2 w-full  px-5 py-2"
            value={selectedOption} onChange={handleChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default MySelect;