/* Canvas fill out */

function fillCanvas() {
    var canvas = document.querySelector("#myCanvas");
    console.log(canvas);

    // element read and prepare for drawing in 2dimension 
    var context = canvas.getContext("2d");
    context.fillStyle = "#ff0000";
    context.fillRect(10, 10, 180, 80);
}

// start the filling
// fillCanvas();


// load picture
function fillImg() {
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");


    //line drawing
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.stroke();

    //circle drawing
    context.beginPath();
    context.arc(100, 20, 40, 0, 360);
    context.stroke();


    //select image
    var img = document.querySelector("#myImg");
    context.drawImage(img, 0, 0);

}

fillImg();
