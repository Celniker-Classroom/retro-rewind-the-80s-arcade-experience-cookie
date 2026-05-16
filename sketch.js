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

// Coins Group
let coins = new Group(); 
let coinCounter = 0; 
const COIN_SPAWN_DELAY = 45; 

cruiser.overlaps(coins, collectCoin);

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

    coinCounter++; 
    if (coinCounter >= COIN_SPAWN_DELAY) { 
      coinCounter = 0; 
      spawnCoin(); 
    } 
  } 

  // Follow the cruiser 
  camera.x = cruiser.x; 
  camera.off(); 
  fill('black'); 
  textSize(20); 
  text('click to jump!', 0, 30); 
  
  // show stats 
  text('SCORE: ' + Math.floor(elapsedSeconds * 10), -width/2 + 100, -height/2 + 80); 
  camera.on(); 
}; 

// remove coin
function collectCoin(player, coin) {
  if (!coin.removed) {

  console.log("Removing coin"); //debugging
  coin.remove(); 
  elapsedSeconds += 10; // coin adds 100 points
  }
}

function restartGame(){ 
  gameActive = true; 
  startTime = Date.now() / 1000; 
  elapsedSeconds = 0; 
  coins.removeAll(); 
  coinCounter = 0; 
  cruiser.x = 0; 
  cruiser.y = 0; 
  cruiser.vel.y = 0; 
  cruiser.vel.x = 5; 
}; 

function spawnCoin(){ 
  let coin = new Sprite(); 
  coin.diameter = 20; 
  coin.img = '💰'; 
  coin.x = camera.x + width/2 + 50; // right edge of screen 
  coin.y = random(-height/2 + 40, height/2 - 40); 
  coin.vel.x = 0; 
  coin.physics = 'static'; 
  coin.collider = 'sensor'; // detects overlaps, no physics collision
  // automatically remove coin after 300 frames to clear memory without standard loops
  coin.life = 300; 
  coins.add(coin);

}; 

// Press "r" to restart the timer 
window.addEventListener('keydown', (e) => { 
  if (e.key === 'r' || e.key === 'R') { 
    restartGame(); 
  } 
});