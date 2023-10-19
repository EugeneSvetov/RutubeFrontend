import MyModalWindow from "./MyModalWindow";
import Post from "./Post";
import words from "../words";

function Submit(data = {}, file = null, strength = 0, selectedOption = " ", action, func) {
    let formdata = new FormData();

    switch (action) {
        case "avatar":
            if (selectedOption === "" || file === null) {
                MyModalWindow('error', 'Ошибка', 'Вы не ввели некоторые поля')
            } else {
                let headers = {'Content-Type': "multipart/form-data"}
                formdata.append("file", file)
                formdata.append("style", selectedOption)
                formdata.append("strength", strength)
                Post('http://127.0.0.1:8000/api/endpoint_avatar', formdata, headers, func);
            }
            break
        case "shapka":
            if (data.name === "" || file === null) {
                MyModalWindow('error', 'Ошибка', 'Вы не ввели некоторые поля')
            } else {
                if (words.some(word => data.name.toLowerCase().includes(word))) {
                    MyModalWindow('error', 'Ошибка', 'Введенный текст не прошел цензуру')
                } else {
                    let headers = {'Content-Type': file.type}
                    for (let i = 0; i < file.length; i++) {
                        let tempFile = file[i];
                        formdata.append("files", tempFile)
                    }
                    formdata.append("name", data.name)
                    Post('http://127.0.0.1:8000/api/endpoint_shapka', formdata, headers, func);
                }
            }
            break
        case "preview":
            if (data.name === "" || data.description === "" || file === null) {
                MyModalWindow('error', 'Ошибка', 'Вы не ввели некоторые поля')
            } else {
                if (words.some(word => data.name.toLowerCase().includes(word)) || words.some(word => data.description.toLowerCase().includes(word))) {
                    MyModalWindow('error', 'Ошибка', 'Введенный текст не прошел цензуру')
                } else {
                    formdata.append("file", file)
                    formdata.append("data", data.name)
                    let headers = {
                        headers: {
                            'Content-Type': file.type, "Filename": unescape(encodeURIComponent(file.name))
                        }
                    }
                    Post('http://127.0.0.1:8000/api/endpoint_video', formdata, headers, func)
                }

            }
            break
        default: return "Китай Бугага"
    }
}

export default Submit;