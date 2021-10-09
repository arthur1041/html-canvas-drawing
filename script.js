window.addEventListener('load', () => {
    const canvas = document.querySelector("#screen");
    const ctx = canvas.getContext("2d");

    //Resizing
    configureSize(canvas);

    window.addEventListener('resize', () => {
        configureSize(canvas);
    });

    /*ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(50, 50, 200, 500);
    ctx.strokeStyle = "red";
    ctx.strokeRect(200, 200, 200, 500);*/

    /*ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 150);
    ctx.closePath();
    ctx.stroke();*/

    //variables
    let painting = false;

    const startPosition = (event) => {
        painting = true;
        draw(event);
    }

    const finishedPosition = () => {
        painting = false;
        ctx.beginPath(); //evita pulos de uma linha para outra
    }
    
    const draw = (event) => {
        if(!painting) return;

        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX, event.clientY)
    } 

    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});

const configureSize = (canvas) => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}