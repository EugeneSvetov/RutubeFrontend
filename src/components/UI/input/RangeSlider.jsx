import React from 'react';
import '../../../tailwind.output.css';


const RangeSlider = ({children, ...props}) => {
    let strength = props.value;
    let changeLabel = '';

    if (strength >= 0.1 && strength < 0.5) {
        changeLabel = 'изменения низкие';
    } else if (strength >= 0.5 && strength < 0.7) {
        changeLabel = 'изменения средние';
    } else if (strength >= 0.7 && strength <= 0.9) {
        changeLabel = 'изменения максимальные';
    }

    return (
        <div>
            <input id="steps-range" type="range" min="0.1" max="0.9" step="0.1"
                   className="w-full  bg-gray-200 ring-black rounded-lg  cursor-pointer"
                   {...props}
            ></input>
            <p className="text-red-900" >{changeLabel}</p>
        </div>
    );
};

export default RangeSlider;