//---------------------------POCET TWAROGOW----------------------------//
let mnostviTvaru = (prompt("možsrví tvarů které zadáte bude krát 2 (bude vykresleno X obdelníků a X kol)"))

if (mnostviTvaru <= 0) {
    document.getElementById("myHeader").innerHTML = "Nelze vykreslit 0 a méně tvarů.";
    draw()
}

//--------------------------------RYCHLOST TWAROW----------------------//
let RychlostTvaru = (prompt("zadejte jak rychle by měli tvary poskakovat (rychle) či (pomalu)" ))

//--------------------------GÓWNO---------------------//
function sendValue() {
    hodnotaminus = 100
    
}

//-----------------TWARY 1.9TDI-------------------------//
if(RychlostTvaru == "pomalu") {

    hodnotaplus = 0
    hodnotaminus = 10
}
 
if (RychlostTvaru == "rychle") {

    hodnotaplus = 20
    hodnotaminus = 50
}
 
//------------------------FARBA----------------------------//
function random(low,high){
    high -= low;
    return Math.random() * high + low
}
 
function getRandomColor(){
    let red = random(0,255);
    let green = random(0,255);
    let blue = random(0,255);
    return`rgb(${red}, ${green}, ${blue})`
}
 
//-----------------------------TWAR KURWA----------------//
class Shape{
    x;
    y;
    speedX; 
    speedY;  
    kontext;
    color; 

    constructor(x,y,speedX,speedY,kontext,color){
        this.x = x
        this.y = y
        this.speedX = speedX
        this.speedY = speedY
        this.kontext = kontext
        this.color = color
    }  

    move(){
        this.x += this.speedX
        this.y += this.speedY
    }
}
 
 //-----------------RECTANGULARUS-------------------------//
class Rectangle extends Shape {
    width;
    height;
    constructor(x,y,speedX,speedY,kontext,width,height,color){
     super(x,y,speedX,speedY,kontext,color)
     this.width = width;
     this.height = height;
    }
 
    move(){

        super.move();
        if (this.x < 0 || this.x > this.kontext.canvas.width - this.height){
            this.speedX *= -1;
        }

        if (this.y < 0 || this.y > this.kontext.canvas.width - this.height){
            this.speedY *= -1;
        }
     }
 
     draw() {
        this.kontext.fillStyle = this.color
        this.kontext.beginPath();
        this.kontext.rect(this.x,this.y,this.width,this.height);
        this.kontext.fill();
    }
}

//-------------------------KOLESO--------------------// 
class Circle extends Shape{
    radius;
    constructor(x,y,speedX,speedY,kontext,color,radius){
        super(x,y,speedX,speedY,kontext,color,)
        this.radius = radius;
    }
 
    move(){
        super.move();
        if (this.x < this.radius || this.x > this.kontext.canvas.width - this.radius){
            this.speedX *= -1;
        }

        if (this.y < this.radius || this.y > this.kontext.canvas.width - this.radius){
            this.speedY *= -1;
        }

    }
 
    draw(){
       this.kontext.fillStyle = this.color
       this.kontext.beginPath();
       this.kontext.arc(this.x,this.y,this.radius,0,Math.PI * 2);
       this.kontext.fill();
      // this.kontext.stroke();

    }

}
  
//----------------------------------------PLATNO KRESLICO-------------------------------//

let canvas = document.createElement("canvas");

document.body.appendChild(canvas);
canvas.width = 600;
canvas.height = 600;

let context = canvas.getContext("2d");
  
//-----------------------------------------KOLIKA TWAROW TAM BUDE KURWA ?????-----------------------------//

let rectangle = []
let circle = []
 
for (let i = 0; i <  mnostviTvaru; i++) {
    circle[i] = new Circle(random(100,500),random(100,300),random(hodnotaminus,hodnotaplus),random(hodnotaminus,hodnotaplus),context,getRandomColor(),random(25,100))
}

for (let i = 0; i <  mnostviTvaru; i++) {
    rectangle[i] =  new Rectangle(random(100,500),random(100,300),random(hodnotaminus,hodnotaplus),random(hodnotaminus,hodnotaplus),context,random(50,100),random(50,100),getRandomColor())
}
 
//--------------I WONDA CO TO ASI BUDE--------------------------//

function draw(){

    context.clearRect(0,0,canvas.width, canvas.height);

    for (let i = 0; i < mnostviTvaru; i++) {
        rectangle[i].move();
        circle[i].move();
        rectangle[i].draw();
        circle[i].draw();
        }
    requestAnimationFrame(draw);
    
}

//------------------------KDE SES KURWA HALOOOO HALOOOO FUNKCE----------------------------//
draw();
sendValue();

// S vykreslováním X tvaru a více mi pomohl Bárta