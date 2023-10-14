import React, {useState} from 'react';
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/input/MyInput";
import MyTextArea from "../UI/textarea/MyTextArea";
import MyButton from "../UI/button/MyButton";
import axios, {get} from "axios";
import MyFileInput from "../UI/input/MyFileInput";
import Swal from "sweetalert2";
import words from "../../words"

const MyPreviewForm = ({getList}) => {
    let formdata = new FormData();

    let [data, setData] = useState({name: '', description: ''})
    let [file, setFile] = useState(null);

    let handleSubmit = (e) => {
        e.preventDefault();

        if (data.name === "" || data.description === "" || file === null) {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: 'Вы ввели не все поля'
            })
        } else {
            if (words.some(word => data.name.toLowerCase().includes(word)) || words.some(word => data.description.toLowerCase().includes(word))) {
                Swal.fire({
                    icon: 'error',
                    title: 'О нет матюки!',
                    text: 'Ругаться плохо'
                })
            } else {
                formdata.append("file", file)
                formdata.append("data", data.name)

                console.log(formdata)

                axios.post('http://127.0.0.1:8000/api/endpoint_video', formdata, {headers:{
                    'Content-Type': file.type, "Filename": unescape(encodeURIComponent(file.name))
                    }})
                    .then(response => {
                        console.log(response.data);
                        getList(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }

        }

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
