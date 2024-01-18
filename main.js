peter_pan_song = "";
harry_potter_song = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
scoreleftWrist = 0;
song1_status = "";
song2_status = "";
scorerightWrist = 0;


function preload()
{
    peter_pan_song = loadSound("music1.mp3");
    harry_potter_song = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist: " + scoreleftWrist);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log("scorerightWrist: " + scorerightWrist);
    }
}