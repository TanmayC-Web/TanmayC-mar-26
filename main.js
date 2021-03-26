function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses)
}

function modelLoaded () {
    console.log('Model Loaded!');
}

function gotPoses () {
	if(result.length > 0)
	{
		console.log(results);
		nosex = result[0].pose.nose.x;
		nosey = result[0].pose.nose.y;
	}
}

function draw() {
	console.log("nose X = " + noseX +", noseY = "+ noseY);
}