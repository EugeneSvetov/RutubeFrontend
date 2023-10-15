import React, {useState} from 'react';
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import axios from "axios";
import MyFileInput from "../UI/input/MyFileInput";

import words from "../../words"
import MyModalWindow from "../../tools/MyModalWindow";

const MyShapkaForm = ({getUrl}) => {
    let formdata = new FormData();

    let [data, setData] = useState({name: ''})
    let [file, setFile] = useState(null);

    let handleSubmit = (e) => {
            e.preventDefault();
            if (data.name === "" || file === null) {
                MyModalWindow('error', 'Ошибка', 'Вы не ввели некоторые поля')
            } else {
                if (words.some(word => data.name.toLowerCase().includes(word))) {
                    MyModalWindow('error', 'Ошибка','Введенный текст не прошел цензуру')
                } else {
                    let headers = {'Content-Type': file.type}
                    for (let i = 0; i < file.length; i++) {
                        let tempFile = file[i];
                        formdata.append("files", tempFile)
                    }
                    formdata.append("name", data.name)
                    axios.post('http://127.0.0.1:8000/api/endpoint_shapka', formdata, headers)
                        .then(response => {
                            getUrl(response.data);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            }
        }
    ;
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