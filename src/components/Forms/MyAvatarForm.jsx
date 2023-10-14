import React, {useState} from 'react';
import MyLabel from "../UI/label/MyLabel";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import axios from "axios";
import MyFileInput from "../UI/input/MyFileInput";
import Swal from "sweetalert2";
import words from "../../words"
import MySelect from "../UI/select/MySelect";
import RangeSlider from "../UI/input/RangeSlider";

const MyAvatarForm = ({getUrl}) => {
        let formdata = new FormData();

        let [selectedOption, setSelectedOption] = useState("");
        let [file, setFile] = useState(null);
        let [strength, setStrength] = useState(0.0)

        let options = [
            {value: "", label: 'Выбрать стиль'},
            {value: "anime", label: 'Anime'},
            {value: "fantasy", label: 'Фэнтези'},
            {value: "neon", label: 'Неон-панк'},
            {value: "pixel", label: 'Пиксель-арт'},
            {value: "gta", label: 'GTA'},
            {value: "biomech", label: 'Биомеханика'}]

        const handleChange = (event) => {
            setSelectedOption(event.target.value);
        };

        let handleSubmit = (e) => {
            console.log(strength)
            e.preventDefault();
            if (selectedOption === "" || file === null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ошибка',
                    text: 'Вы ввели не все поля'
                })
            } else {
                let headers = {'Content-Type': "multipart/form-data"}
                formdata.append("file", file)
                formdata.append("style", selectedOption)
                formdata.append("strength", strength)
                axios.post('http://127.0.0.1:8000/api/endpoint_avatar', formdata, headers)
                    .then(response => {
                        console.log("Картинка пришла");
                        console.log(response.data);
                        getUrl(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
        return (
            <div>
                <div>
                    <div className="flex items-center justify-between">
                        <MyLabel value={"Стиль аватарки"}></MyLabel>
                    </div>
                    <div className="mt-2">
                        <MySelect
                            selectedOption={selectedOption}
                            handleChange={handleChange}
                            options={options}>
                        </MySelect>
                    </div>
                </div>
                <br></br>
                <div>
                    <div className="flex items-center justify-between">
                        <MyLabel value={"Степень изменения"} ></MyLabel>
                    </div>
                    <div className="mt-2">
                        <RangeSlider
                        value={strength}
                        onChange={e => setStrength(e.target.value)}
                        >

                        </RangeSlider>
                    </div>
                </div>
                <br></br>
                <div>
                    <div className="flex items-center justify-between">
                        <MyLabel
                            value={"Фото"}>
                        </MyLabel>
                    </div>
                    <div className="mt-2">
                        <MyFileInput
                            onChange={(e) => setFile(e.target.files[0])}
                            text={"PNG, JPG, JPEG, TIFF or RAW (MAX. 200MB)"}
                            accept="image/*"
                        ></MyFileInput>
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
    }
;

export default MyAvatarForm;