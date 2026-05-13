

await Canvas(); 


world.gravity.y = 15;

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
    
    // Constant movement
    cruiser.vel.x = 5;

    if (mouse.pressing() || kb.pressing('space')) {
        cruiser.vel.y = -5;
    }
    /*
    // Keep sprite on screen (top and bottom bounds)
    if (cruiser.y < -height/2) cruiser.y = -height/2;
    if (cruiser.y > height/2) cruiser.y = height/2;
    */
    // Follow the cruiser
    camera.x = cruiser.x
    
    camera.off();
    fill('black'); // Add text color so it's visible

    text('click to jump!', 0, 30);
    updateTimer();
    camera.on();
};
function updateTimer(){
    let secs = String(new Date().getSeconds()).padStart(2, '0');
    text(secs, -width/2 + 100, -height/2 + 100);
};

