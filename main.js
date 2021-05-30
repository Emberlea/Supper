var canvas= new fabric.Canvas("mc");

var s_x=200;
var s_y=200;

var bl_h=30;
var bl_w=30;

var super_o="";
var block_o="";

function first(){
    fabric.Image.fromURL("Screenshot 2021-05-15 123623.png",function (Img){
        super_o=Img;
        super_o.scaleToWidth(100);
        super_o.scaleToHeight(150);
        super_o.set({
            top:s_x,
            left:s_y
        });
        canvas.add(super_o);
    });
}
function second(get_img){
    fabric.Image.fromURL(get_img,function (Img){
        block_o=Img;
        block_o.scaleToWidth(100);
        block_o.scaleToHeight(150);
        block_o.set({
            top:s_x,
            left:s_y
        });
        canvas.add(block_o);
    });
}
window.addEventListener("keydown",kd);
function kd(e){
    keyclick= e.keyCode;

    if(e.shiftKey==true && keyclick=='80'){
        bl_h=bl_h+10;
        bl_w=bl_w+10;
        document.getElementById("c_h").innerHTML=bl_h;
        document.getElementById("c_w").innerHTML=bl_w;
    }

    if(e.shiftKey==true && keyclick=='78'){
        bl_h=bl_h-10;
        bl_w=bl_w-10;
        document.getElementById("c_h").innerHTML=bl_h;
        document.getElementById("c_w").innerHTML=bl_w;
    }
    if(keyclick=='70'){
        second('thor_face.png');
        console.log("face");
    }
    if(keyclick=='65'){
        second('hulk_right_hand.png');
        console.log("armsone");
    }
    if(keyclick=='72'){
        second('captain_america_left_hand.png');
        console.log("armstwo");
    }
    if(keyclick=='66'){
        second('ironman_body.png');
        console.log("body");
    }
    if(keyclick=='76'){
        second('spiderman_legs.png');
        console.log("legs");
    }
    if(keyclick=='38'){
        up();
        console.log("up");
    }
    if(keyclick=='40'){
        down();
        console.log("down");
    }
    if(keyclick=='37'){
        left();
        console.log("left");
    }
    if(keyclick=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if(s_y>=0){
        s_y=s_y-10;
        console.log("Up key was pressed");
        console.log("X="+s_x+"Y="+s_y);
        canvas.remove(super_o);
        first();
    }
}
function down(){
    if(s_y<=500){
        s_y=s_y+10;
        console.log("Down key was pressed");
        console.log("X="+s_x+"Y="+s_y);
        canvas.remove(super_o);
        first();
    }
}
function left(){
    if(s_x>=0){
        s_x=s_x-10;
        console.log("Left key was pressed");
        console.log("X="+s_x+"Y="+s_y);
        canvas.remove(super_o);
        first();
    }
}
function right(){
    if(s_x<=900){
        console.log("Right key was pressed");
        console.log("X="+s_x+"Y="+s_y);
        canvas.remove(super_o);
        first();
    }
}