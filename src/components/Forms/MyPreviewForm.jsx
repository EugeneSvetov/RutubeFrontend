import React, {useState} from 'react';
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/input/MyInput";
import MyTextArea from "../UI/textarea/MyTextArea";
import MyButton from "../UI/button/MyButton";
import MyFileInput from "../UI/input/MyFileInput";

import Submit from "../../tools/Submit";

const MyPreviewForm = ({getList}) => {

    let [data, setData] = useState({name: '', description: ''})
    let [file, setFile] = useState(null);

    let handleSubmit = (e) => {
        e.preventDefault();
        Submit(data, file, 0, "", "preview", getList);
    };

    return (
        <div>
            <div>
                <div className="flex items-center justify-between">
                    <MyLabel
                        value={"Название видеоролика"}>
                    </MyLabel>
                </div>
                <div className="mt-2">
                    <MyInput
                        value={data.name}
                        placeholder="Название"
                        onChange={e => setData({...data, name: e.target.value})}>
                    </MyInput>

                </div>
            </div>
            <br></br>
            <div>
                <div className="flex items-center justify-between">
                    <MyLabel
                        value={"Описание видеоролика"}>

                    </MyLabel>
                </div>
                <div className="mt-2">
                    <MyTextArea
                        // value = {data.description}
                        onChange={e => setData({...data, description: e.target.value})}
                        placeholder="Описание">
                    </MyTextArea>
                </div>
            </div>
            <br></br>
            <div>
                <div className="flex items-center justify-between">
                    <MyLabel
                        value={"Видеоролик"}>
                    </MyLabel>
                </div>
                <div className="mt-2">
                    <MyFileInput
                        onChange={(e) => setFile(e.target.files[0])}
                        text={"MP4, WAV, MOV or AVI (MAX. 10GB)"}
                        accept="video/*"
                    >

                    </MyFileInput>
                </div>
            </div>
            <br></br>
            <div>

                <MyButton
                    value={"Сгенерировать"}
                    type="submit"
                    onClick={handleSubmit}
                >
                </MyButton>
            </div>
        </div>
    );
};

export default MyPreviewForm;
