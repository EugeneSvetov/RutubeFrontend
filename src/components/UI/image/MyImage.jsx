import React from 'react';

const MyImage = ({image}) => {
    if (image) {
        return (
            <figure className="max-w-lg">
                <img className="h-auto  border max-w-full rounded-lg" src={"http://127.0.0.1:8000/" + image}
                     alt="description"></img>
                    <figcaption className="mt-2 text-sm text-center text-gray-500">Сгенерированное изображение
                    </figcaption>
            </figure>)
    } else {
        return <></>
    }
    };

    export default MyImage;