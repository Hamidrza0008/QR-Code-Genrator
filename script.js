let QRimg = document.getElementById("QRimg");
let imgBox = document.getElementById("imgBox");
let QRtext = document.getElementById("QRtext");



function GenerateQR(){
    if(QRtext.value.length > 0){
        QRimg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
        imgBox.classList.add("show-img");
    }
    else{
        QRtext.classList.add("error");
        setTimeout(()=>{
            QRtext.classList.remove("error");
        },1000)
    }
}