import React from 'react';
import FilerobotImageEditor, {TABS, TOOLS} from "react-filerobot-image-editor";

const ImageEditor = ({image, setImage}) => {
        console.log(image)

        let download = (data) => {
            let link = document.createElement('a');
            link.href = data.imageBase64;
            link.download = 'image.png';
            link.click();
        }


        if (image) {
            return (
                <FilerobotImageEditor
                    source={"http://127.0.0.1:8000/" + image}
                    onSave={(editedImageObject, designState) => download(editedImageObject)}
                    annotationsCommon={{
                        fill: '#ff0000'
                    }}
                    Text={{text: 'Filerobot...'}}
                    Rotate={{angle: 90, componentType: 'slider'}}
                    tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
                    defaultTabId={TABS.ANNOTATE} // or 'Annotate'
                    defaultToolId={TOOLS.TEXT} // or 'Text'
                />
            )
        } else {
            console.log('ffff')
            return <></>
        }
    }
;
export default ImageEditor;