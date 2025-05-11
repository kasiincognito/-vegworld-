function startGame(){                                          // Premiere fonction lanceequand on commence le jeu
    scene.start()
    player = new player()
    player.update()
    move = ""
    vegAudio = document.getElementById('vegAudio')
    jumpv = 0
    stone = "assets/stone.jpg"
    grass = "assets/grass.jpg"
    water = "assets/water.jpg"
    wood = "assets/wood.jpg"
    leaf = "assets/leaf.jpg"
    idle = ["assets/idle1.png", "assets/idle2.png"]                     //liste d'images pour l'animation de idle
    idleCounter = 0
    left = ["assets/left1.png", "assets/left2.png", "assets/left3.png"] //liste d'images pour l'animation de left
    leftCounter = 0
    right = ["assets/right1.png", "assets/right2.png", "assets/right3.png"]  //liste d'images pour l'animation de right
    rightCounter = 0
    vx = 0
    jumpnum = 0
    map = []
    mapX = 500
    mapY = window.innerHeight * 0.2
    var f
    vegAudio.play()
    window.addEventListener("keydown" ,function(event){
        if(event.key === "ArrowRight"){
            move = "right"
        }
        if(event.key === "ArrowLeft"){
            move = "left"
        }
        if(event.key === "ArrowUp"){
            if(jumpnum > 0){
		        jumpnum = 0
		        jumpv = 20
	        }
        }
    })
    window.addEventListener("keyup", function(event){
        if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
            move = ""
        }
    })

    tilemap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // Liste que la fonction drawMap suis pour dessiner la map
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // ca fait un peu peur oui 
               0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0,
               3, 3, 3, 3, 3, 2, 2, 1, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3,
               3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3,
    ]
    drawMap(mapX, mapY, 0)
    setInterval(updateMap, 1000/50)
}

function tile(x, y, width, height, src){                         // Moule a carreaux dans la map
    this.x = x
    this.y = y
    this.image = new Image()
    this.image.src = src
    this.width = width
    this.height = height
    ctx = scene.context
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
}

function drawMap(mapX, mapY, c){                            // Fonction pour dessiner la map chaque frame correspondant a la liste tilemap
    y = mapY
    x = mapX
    for(var i = 0; i < tilemap.length; i++){
        if(c >= 20){
            c = 0
            y += 60
            x = mapX
        }
        if(tilemap[i] == 0){
            x += 60
        }
        if(tilemap[i] == 1){
            map.push(new tile(x, y, 60, 60, grass))                // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
            x += 60
        }
        if(tilemap[i] == 2){
            map.push(new tile(x, y, 60, 60, stone))                // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
            x += 60
        }
        if(tilemap[i] == 3){
            map.push(new tile(x, y, 60, 60, water))                // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
            x += 60
        }
        c += 1
    }
}

function updateMap(){       // Fonction qui est appelee chaque 20millisecondes contenant toutes les instructions permettant la mise a jour de l'interface a chaque frame
    scene.clear()  

    mapX += vx
    mapY += jumpv
    map = []
    drawMap(mapX, mapY, 0)
    player.update()

    if(move === "right"){
        vx = -13
    }
    else if(move === "left"){
        vx = 13
    }
    else if(move === ""){
        vx = 0
    } 
	
    jumpv -= 2

    for(var i = 0; i < map.length; i++){								// Boucle permettant de verifier la collision avec le joueur pour chaques blocs de la map
        verifCollision(player, map[i])
    }
}

startGame()