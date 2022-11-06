score_rightwrist=0;
score_leftwrist=0;

rightwristx=0;
rightwristy=0;

leftwristx=0;
leftwristy=0;

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        score_rightwrist = results[0].pose.keypoints[10].score;
        score_leftwrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist="+score_rightwrist+"scoreLeftWrist="+score_leftwrist);

        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("rightwristx="+rightwristx+"rightwristy="+rightwristy);

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftwristx="+leftwristx+"leftwristy="+leftwristy);

    }
}