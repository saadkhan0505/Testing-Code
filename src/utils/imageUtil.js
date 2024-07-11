function getBase64(file){
 return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
})
}

function getFileNameFromBase64(base64String) {
    const fileType = base64String.substring("data:image/".length, base64String.indexOf(";base64"));
    const fileName = `default-image-${Math.floor(Math.random() * 100000)}.${fileType}`;
    return fileName;
}

export {getBase64, getFileNameFromBase64}