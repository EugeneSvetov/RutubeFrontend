import React from 'react';

const RangeSlider = ({children, ...props}) => {
    return (
        <input id="steps-range" type="range" min="0.1" max="0.9" step="0.1" className="w-full h-2 bg-gray-200 ring-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        {...props}
        ></input>
    );
};

export default RangeSlider;