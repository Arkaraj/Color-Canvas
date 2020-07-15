var can = document.getElementById('light');
var ctx = can.getContext('2d');

can.style.background = 'black';
var clr = true;

function changeclr()
{
if(clr)
{
    can.style.background = 'white';
        can.style.border = '2px solid black';
    clr = false;
}else{
    can.style.background = 'black';
    clr = true;
}
    }

let displace = 0;
function Move(e)
{
    let x = e.pageX - can.offsetLeft - displace;
    let y = e.pageY - can.offsetTop - displace;
    ctx.fillStyle = Color();
    let r = 20;
    ctx.beginPath();
    //ctx.fillRect(x,y,20,20);
    ctx.arc(x,y,r,0,2*Math.PI,false);
    ctx.fill();
    ctx.stroke();
    
}
function torch(e)
{
    can.onmousemove = Move;
    let x = e.pageX - can.offsetLeft - displace;
    let y = e.pageY - can.offsetTop - displace;
    let r = 20;
    ctx.beginPath();
    ctx.fillStyle = Color();
    ctx.arc(x,y,r,0,2*Math.PI,false);
    //ctx.fillRect(x,y,20,20);
    ctx.fill();
    ctx.stroke();
}

function Color()
{
    let r = Math.floor(Math.random()*255) + 1;
    let g = Math.floor(Math.random()*255) + 1;
    let b = Math.floor(Math.random()*255) + 1;

    return 'rgb('+r+','+g+','+b+')';
}

function UP()
{
    can.onmousemove = null;
}

can.onmousedown = torch;
can.onmouseup = UP;

function clearthis()
{
    console.log('Cleared!');
    ctx.clearRect(0,0,can.width,can.height);
}

var sv = document.getElementById('dwn');

function save()
{
    const a = document.createElement('a');
    //For IE/Edge
    if(window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(can.msToBlob(),"maze_solve.png")
    }
    else
    {
        document.body.appendChild(a);
        a.href = can.toDataURL("image/jpeg");
        a.download = 'color_dots.jpeg';
        a.click();
        document.body.removeChild (a);
    }
}