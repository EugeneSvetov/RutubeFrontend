import React from 'react';
import MyImage from "./MyImage";

const MyImageList = ({list}) => {
    return (
        <div>
            {
                list.map((image, index) => (<div>
                        <MyImage image={image} key={index}/>
                        <br></br>
                    </div>


                ))
            }
        </div>

    )
};

export default MyImageList;