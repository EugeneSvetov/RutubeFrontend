import React, {useState} from 'react';

import '../../tailwind.output.css';

import MyPreviewForm from "./MyPreviewForm";
import MyAvatarForm from "./MyAvatarForm";
import MyShapkaForm from "./MyShapkaForm";
import MySelect from "../UI/select/MySelect";
import MyImage from "../UI/image/MyImage";
import FilerobotImageEditor, {TABS, TOOLS} from "react-filerobot-image-editor";
import ImageEditor from "../ImageEditor";

const MyForm = () => {

    let [selectedOption, setSelectedOption] = useState("");
    let [image, setImage] = useState("");
    let options = [
        {value: "choose", label: 'Выбор что'},
        {value: "video", label: 'Превью для видео'},
        {value: "avatar", label: 'Аватарка для канала'},
        {value: "shapka", label: 'Шапка для канала'}]


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setImage("");
    };


    let getImageUrl = (imageUrl) => {
        setImage(imageUrl);
    }
    const renderFields = (value) => {

        if (selectedOption === "video") {
            return (
                <div>
                    <MyPreviewForm
                        getUrl={getImageUrl}
                    ></MyPreviewForm>

                </div>
            );
        } else if (selectedOption === "avatar") {
            return (
                <div>
                    <MyAvatarForm
                        getUrl={getImageUrl}
                    ></MyAvatarForm>
                </div>
            );
        } else if (selectedOption === "shapka") {
            return (
                <div>
                    <MyShapkaForm
                        getUrl={getImageUrl}
                    ></MyShapkaForm>
                </div>
            );
        }

        return <div></div>;
    };

    return (
        <div className="flex min-h-full w-full flex-1 flex-col justify-center ">
            <div className="mt-10 sm:mx-auto w-full sm:max-w-lg">
                <div>
                    <MySelect
                        selectedOption={selectedOption}
                        handleChange={handleChange}
                        options={options}
                    >
                    </MySelect>
                    <br></br>
                    <br></br>
                    {renderFields()}
                    <br></br>
                </div>
                <div className="mt-10 sm:mx-auto w-full sm:max-w-2xl">
                    <ImageEditor image={image}></ImageEditor>
                </div>
            </div>
        </div>
    )
        ;
};

export default MyForm;