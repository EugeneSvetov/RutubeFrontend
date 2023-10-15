import React, {useState} from 'react';

import '../../tailwind.output.css';

import MyPreviewForm from "./MyPreviewForm";
import MyAvatarForm from "./MyAvatarForm";
import MyShapkaForm from "./MyShapkaForm";
import MySelect from "../UI/select/MySelect";
import ImageEditor from "../ImageEditor";

import MyImageList from "../UI/image/MyImageList";

const MyForm = () => {

    let [selectedOption, setSelectedOption] = useState("");
    let [image, setImage] = useState("");
    let [imageList, setImageList] = useState([""])
    let options = [
        {value: "choose", label: 'Выбрать объект генерации'},
        {value: "video", label: 'Превью для видео'},
        {value: "avatar", label: 'Аватарка для канала'},
        {value: "shapka", label: 'Шапка для канала'}]


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setImage("");
        setImageList([""])
    };

    let getImageList = (imgList) => {
        setImageList(imgList)
    }
    let getImageUrl = (imageUrl) => {
        setImage(imageUrl);
    }
    const renderFields = (value) => {

        if (selectedOption === "video") {
            return (
                <div>
                    <MyPreviewForm
                        getList={getImageList}

                    ></MyPreviewForm>
                    <br></br>
                    <MyImageList
                        list={imageList}
                    ></MyImageList>
                </div>
            );
        } else if (selectedOption === "avatar") {
            return (
                <div>
                    <MyAvatarForm
                        getUrl={getImageUrl}
                    ></MyAvatarForm>
                    <br></br>
                    <div className="mt-10 sm:mx-auto w-full sm:max-w-2xl">
                        <ImageEditor image={image} setImage={setImage}></ImageEditor>
                    </div>
                </div>
            );
        } else if (selectedOption === "shapka") {
            return (
                <div>
                    <MyShapkaForm
                        getUrl={getImageUrl}
                    ></MyShapkaForm>
                    <br></br>
                    <div className="mt-10 sm:mx-auto w-full sm:max-w-2xl">
                        <ImageEditor image={image} setImage={setImage}></ImageEditor>
                    </div>
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


            </div>
        </div>
    )
        ;
};

export default MyForm;