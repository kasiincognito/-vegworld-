function startGame(){ 
    background = new background(0, -200, 4002, 950, "assets/mountains.png")
    tilemap = new tutorial()
    enemy = new ennemy()
    collider = []
    map = []
    scene.start()
    player = new player()
    player.update()
    platform = new platform(500, window.innerHeight * 0.2, tutorial.tilemap)
    move = ""
    var vegAudio = document.getElementById('vegAudio')

    // charger les images une seule fois
    stone = new Image()
    stone.src = "assets/stone.jpg"

    grass = new Image()
    grass.src = "assets/grass.jpg"

    water = new Image()
    water.src = "assets/water.jpg"

    wood = new Image()
    wood.src = "assets/wood.jpg"

    leaf = new Image()
    leaf.src = "assets/leaf.jpg"

    idle = ["assets/idle1.png", "assets/idle2.png"]
    idleCounter = 0
    left = ["assets/left1.png", "assets/left2.png", "assets/left3.png"]
    leftCounter = 0
    right = ["assets/right1.png", "assets/right2.png", "assets/right3.png"]
    rightCounter = 0

    mapX = 500
    mapY = window.innerHeight * 0.2
    vegAudio.play()

    window.addEventListener("keydown" ,function(event){
        if(event.key === "ArrowRight") move = "right"
        if(event.key === "ArrowLeft") move = "left"
        if(event.key === "ArrowUp"){
            if(player.jumpnum > 0){
                player.jumpnum = 0
                player.jumpv = 20
            }
        }
    })
    window.addEventListener("keyup", function(event){
        if(event.key === "ArrowRight" || event.key === "ArrowLeft") move = ""
    })

    drawMap(mapX, mapY, tilemap.limit, tilemap)
    ennemy = new ennemy()
    ennemy.update()
    background.update()
    setInterval(updateMap, 1000/50)
}


function tile(x, y, width, height, img){ // img est déjà un objet Image
    this.x = x
    this.y = y
    this.image = img   // utiliser l’image préchargée
    this.width = width
    this.height = height
    ctx = scene.context
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
}


function drawMap(mapX, mapY, l, sub){                            // Fonction pour dessiner la map chaque frame correspondant a la liste tilemap
    c = 0
    y = mapY
    x = mapX
    for(var i = 0; i < sub.tiles.length; i++){
        if(c >= l){
            c = 0
            y += 60
            x = mapX
        }
        if(sub.tiles[i] == 0){
            x += 60
        }
        if(sub.tiles[i] == 1){
            map.push(new tile(x, y, 60, 60, grass))                 // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
	    collider.push(new tile(x, y, 60, 60, grass))              // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
	    x += 60
        }
        if(sub.tiles[i] == 2){
            map.push(new tile(x, y, 60, 60, stone))                // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
	    collider.push(new tile(x, y, 60, 60, stone))               // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
	    x += 60
        }
        if(sub.tiles[i] == 3){
            map.push(new tile(x, y, 60, 60, water))             // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
	    x += 60
        }
        if(sub.tiles[i] == 4){
            map.push(new tile(x, y, 60, 60, wood))  
            collider.push(new tile(x, y, 60, 60, wood))                // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
	    x += 60
        }
        if(sub.tiles[i] == 5){
            map.push(new tile(x, y, 60, 60, leaf))                // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
	    collider.push(new tile(x, y, 60, 60, leaf))
	    x += 60
        }
        c += 1
    }
}

function updateMap(){
    scene.clear()  

    mapY += player.jumpv
    background.y += player.jumpv / 10
    collider = []
    map = []
    background.update()
    drawMap(mapX, mapY, tilemap.limit, tilemap)
    player.update()
    player.move(move)

    for(var i = 0; i < collider.length; i++){	
        checkCollision(player, collider[i], "player")
	checkCollision(ennemy, collider[i], "entity")
    }
    mapX += player.vx
    background.x += player.vx / 10
    enemy.update()
	
}

startGame()