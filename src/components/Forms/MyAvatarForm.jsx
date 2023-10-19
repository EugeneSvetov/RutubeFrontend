import React, {useState} from 'react';
import MyLabel from "../UI/label/MyLabel";

import MyButton from "../UI/button/MyButton";
import MyFileInput from "../UI/input/MyFileInput";

import MySelect from "../UI/select/MySelect";
import RangeSlider from "../UI/input/RangeSlider";

import Submit from "../../tools/Submit";

const MyAvatarForm = ({getUrl}) => {

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
            e.preventDefault();
            Submit({}, file, strength, selectedOption, "avatar", getUrl)
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