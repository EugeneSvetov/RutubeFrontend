import React from 'react';
import FilerobotImageEditor, {TABS, TOOLS} from "react-filerobot-image-editor";

const ImageEditor = ({image}) => {
    let download = (data) => {
        let img = data.imageCanvas.toDataURL(data)
        const downloadLink = document.createElement('a');
        downloadLink.href = img;
        downloadLink.download = 'edited_image.png'; // Задайте имя файла для скачивания

        // Кликните по ссылке для скачивания
        downloadLink.click();
    }

    if (image) {
        return (
            <FilerobotImageEditor
                source={"http://127.0.0.1:8000/" + image}
                onSave={(editedImageObject, designState) =>
                    download(editedImageObject)

                }
                annotationsCommon={{
                    fill: '#ff0000',
                }}
                Rotate={{angle: 90, componentType: 'slider'}}
                tabsIds={[TABS.ADJUST, TABS.ANNOTATE]} // or {['Adjust', 'Annotate', 'Watermark']}
                defaultTabId={TABS.ANNOTATE} // or 'Annotate'
                toolbarConfig={{enabled: false}}
                language="ru"
            />
        );
    } else {
        return <></>
    }

};

export default ImageEditor;