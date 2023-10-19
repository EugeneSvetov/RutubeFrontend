import React, {useState} from 'react';
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

import MyFileInput from "../UI/input/MyFileInput";

import Submit from "../../tools/Submit";

const MyShapkaForm = ({getUrl}) => {

    let [data, setData] = useState({name: ''})
    let [file, setFile] = useState(null);

    let handleSubmit = (e) => {
        e.preventDefault();
        Submit(data, file, 0, "", "shapka", getUrl);
    }

    return (
        <div>
            <div>
                <div className="flex items-center justify-between">
                    <MyLabel
                        value={"Описание канала"}>
                    </MyLabel>
                </div>
                <div className="mt-2">
                    <MyInput
                        value={data.name}
                        placeholder="Описание"
                        onChange={e => setData({...data, name: e.target.value})}>
                    </MyInput>

                </div>
            </div>
            <br></br>
            <div>
                <div className="flex items-center justify-between">
                    <MyLabel
                        value={"Несколько видео с канала"}>
                    </MyLabel>
                </div>
                <div className="mt-2">
                    <MyFileInput
                        onChange={(e) => setFile(e.target.files)}
                        text={"MP4, WAV, MOV or AVI (MAX. 50GB)"}
                        accept="video/*"
                    >

                    </MyFileInput>
                </div>
            </div>
            <br></br>
            <div>
                <MyButton
                    value={"Сгенерировать"}
                    onClick={handleSubmit}
                    type="button"
                >
                </MyButton>
            </div>
        </div>

    )
        ;
};

export default MyShapkaForm;