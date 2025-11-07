$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,601,100,199, "red");
    createPlatform(200,601,100,199, "red");
    createPlatform(500,601,100,199, "red");
    createPlatform(700,503,100,250, "red");
    createPlatform(900,405,100,350, "red");
    createFakePlatform(0,601,5000,50, "red")



    // TODO 3 - Create Collectables
    createCollectable("sigma", 725,460)
    createCollectable("sigma", 200,560)
    createCollectable("sigma", 500,560)


    
    // TODO 4 - Create Cannons
    createCannon("top",500,750)
    createCannon("left",640,0)
    createCannon("top",700,750)


    // SECRET TODO - Create Boss


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
