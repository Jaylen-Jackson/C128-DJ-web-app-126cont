Song1 = "";
Song2 = "";
leftWristX = 0;
LeftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup() 
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX" + leftWristX +"leftWristY" + leftWristY);

        rightWristX = result[0].pose.leftWrist.x;
        rightWristY = result[0].pose.leftWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY ="+ rightWrist);


    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}