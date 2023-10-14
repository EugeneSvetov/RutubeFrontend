import React from 'react';

const MyImage = ({image}) => {
    if (image) {
        return (
            <figure className="max-w-lg">
                <img className="h-auto  border max-w-full rounded-lg" src={"http://127.0.0.1:8000/" + image}
                     alt="image description"></img>
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Сгенерированное изображение
                    </figcaption>
            </figure>)
    } else {
        return <></>
    }
    };

    export default MyImage;