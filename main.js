usthachex=0;
Musthachey=0;

function preload(){
    Mustache = loadImage('Musthache.png');
}

function setup() 
{ canvas = createCanvas(300, 300); 
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose',gotPoses)
}

function ModelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
if(results.length>0)
{
console.log(results);
nosex = results[0].pose.Musthache.x-10;
nosey = results[0].pose.Mustache.y-10;
console.log("Musthache x=" + Musthachex);
console.log("Musthache y=" + Musthachey);
}
}

function draw(){
    image(video,0,0,300,300);
    image(Mustache,Musthachex,Mustachey,30,30);
}

function take_snapshot()
{
save('My_Filter_Image.png');
} 