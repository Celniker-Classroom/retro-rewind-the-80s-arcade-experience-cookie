await Canvas(); 
world.gravity.y = 20;

let cruiser = new Sprite();
cruiser.diameter = 32;
cruiser.img = '🤪';
cruiser.x = width / 2;
cruiser.y = height / 2;

let ground = new Sprite();
ground.x = width / 2;
ground.y = height - 50;
ground.width = width * 10;
ground.height = 100;
ground.physics = 'static';

q5.draw = function () {
    background('skyblue'); // Clears the black screen
    
    // Constant movement
    cruiser.vel.x = 5;

    if (mouse.presses()) {
        cruiser.vel.y = -3;
    }

    // Follow the cruiser
    camera.x = cruiser.x;
    
    // UI text must follow the camera or be drawn after camera.off()
    text('click to jump!', cruiser.x, cruiser.y - 50); 
};
