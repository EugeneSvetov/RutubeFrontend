import axios from "axios";

function Post(url, formdata, headers, func) {
    axios.post(url, formdata, headers)
        .then(response => {
            console.log(response.data)
            func(response.data);
        })
}

export default Post;