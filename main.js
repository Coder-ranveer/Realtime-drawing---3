noseX=0;
noseY=0;
differnece = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO)
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    video.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); 
}

function modelLoaded()
{
    console.log('Pose Is Initialized')
}

function draw()
{
    background('#ff0000')

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + differnece +"px";
    fill('#ffa500');
    stroke('#FFFF00')
    square(noseX, noseY,differnece);
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY =" + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    differnece = floor(leftWristX - rightWristX);
    
}
}