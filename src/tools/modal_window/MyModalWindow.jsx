import Swal from "sweetalert2";
import '../../tailwind.output.css';

function MyModalWindow (icon, title, text) {
    return (
        Swal.fire({
            icon: icon,
            title: title,
            text: text
        })
    );
};

export default MyModalWindow;