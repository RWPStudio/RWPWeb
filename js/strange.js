function to_greyscale() {
    let styleSheets = document.body.style;
    styleSheets.filter = "grayscale(1)";
}

function autoUpdateCopyrightDate() {
    let cpr = document.getElementById("copyright");
    cpr.innerText = "Copyright by RedWhite Studio " + new Date().getFullYear();
}

function imgToBase64(imgurl, callback) {
    fetch(imgurl).then(res => res.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
                callback(reader.result);
            }
            reader.readAsDataURL(blob);
        });
}