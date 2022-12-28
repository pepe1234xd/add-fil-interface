const chooseFile = document.getElementById('svgimage');
const imgPreview = document.getElementById('image');

const uploadImage =() => {
    const files = chooseFile.files[0];
    if (files) {
        let hasChild = imgPreview.hasChildNodes();

        if(hasChild) {
            imgPreview.removeChild(imgPreview.childNodes[0]);
        }

        let reader = new FileReader();
        const imagTag = document.createElement('img');
        reader.onloadend = function() {
            console.log('RESULT', reader.result)
            imagTag.src = reader.result;
        }
        reader.readAsDataURL(files); 
        imgPreview.appendChild(imagTag);


    } else {
        console.error('No image')
    }
}