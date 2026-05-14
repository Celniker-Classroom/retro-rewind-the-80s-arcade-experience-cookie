await Canvas(); 

world.gravity.y = 15;

// Game state variables
let gameActive = true;
let startTime = null;
let elapsedSeconds = 0;

let cruiser = new Sprite();
cruiser.diameter = 32;
cruiser.img = '🍪';
cruiser.x = 0;
cruiser.y = 0;

let ground_bottom = new Sprite();
ground_bottom.x = 0;
ground_bottom.y = height/2;
ground_bottom.width = width * 10000;
ground_bottom.height = 100;
ground_bottom.physics = 'static';
ground_bottom.color = 'tan';

let ground_top = new Sprite();
ground_top.x = 0;
ground_top.y = -height/2;
ground_top.width = width * 10000;
ground_top.height = 100;
ground_top.physics = 'static';
ground_top.color = 'tan';

q5.draw = function () {
    background('skyblue');
    if (gameActive){
        // Constant movement
        cruiser.vel.x = 5;

        if (mouse.pressing() || kb.pressing('space')) {
            cruiser.vel.y = -5;
        }

        // Keep sprite on screen (top and bottom bounds)
        if (cruiser.y < -height/2) cruiser.y = -height/2;
        if (cruiser.y > height/2) cruiser.y = height/2;
        
        // Timer
        if (startTime === null) startTime = Date.now() / 1000;
        let now = Date.now() / 1000;
        elapsedSeconds = now - startTime;
    }
    
    // Follow the cruiser
    camera.x = cruiser.x
    
    camera.off();
    fill('black'); // Add text color so it's visible
    textSize(20);
    text('click to jump!', 0, 30);

    // show stats
    text('SCORE: ' + elapsedSeconds.toFixed(1) * 10, -width/2 + 100, -height/2 + 80)
    
    camera.on();
};
function restartGame(){
    startTime = Date.now() / 1000;
    elapsedSeconds = 0;
    cruiser.x = 0;
    cruiser.y = 0;
    cruiser.vel.y = 0;
};

// Press 'R' to restart the stopwatch and score
window.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        restartGame();
    }
});