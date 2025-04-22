function startGame(){                                               // Premiere fonction lanceequand on commence le jeu
    scene.start()
    player = new player()
    player.update()
    move = ""
    jumpv = 0
    stone = "assets/stone.png"
    idle = ["assets/idle1.png", "assets/idle2.png"]
    idleCounter = 0
    left = ["assets/left1.png", "assets/left2.png", "assets/left3.png"]
    leftCounter = 0
    right = ["assets/right1.png", "assets/right2.png", "assets/right3.png"]
    rightCounter = 0
    vx = 0
    jumpnum = 0
    map = []
    mapX = 500
    mapY = window.innerHeight * 0.2
    var f
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

    if(move === "right"){
        f = 10
    }
    else if(move === "left"){
        f = 10
    }
    else if(move === ""){
	f = 3
    }

    function anim(){
	if(idleCounter >= idle.length){
	    idleCounter = 0
	}
	player.image.src = idle[idleCounter]
	idleCounter += 1
	setTimeout(anim, 1000/f)
    }

    tilemap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // Liste que la fonction drawMap suis pour dessiner la map
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // ca fait un peu peur oui 
               0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]
    anim()
    drawMap(mapX, mapY, 0)
    setInterval(updateMap, 1000/50)
}

var scene = {
    canvas : document.createElement("canvas"),
    start : function(){                                     // Methode start() pour l'objet scene afin de creer le canvas
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        
    },
    clear : function() {                                    // Methode utilisee pour effacer le contenu du canvas et reremplir dans la fonction updateMap
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
}

function player(){			// Objet player "je ne sais pas trop comment le definir" (moule a joueur).
    this.width = 60
    this.height = 120
    this.image = new Image()
    this.image.src = "assets/idle1.png"                                  
    this.x = (window.innerWidth / 2) - (this.width / 2)
    this.y = (window.innerHeight * 0.2) + (60 * 2)
    ctx = scene.context
    this.update = function(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
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
            map.push(new tile(x, y, 60, 60, stone))                // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
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
        vx = -10
    }
    else if(move === "left"){
        vx = 10
    }
    else if(move === ""){
        vx = 0
    } 
	
    jumpv -= 2

    for(var i = 0; i < map.length; i++){								// Boucle permettant de verifier la collision avec le joueur pour chaques blocs de la map
        if(player.x + player.width > map[i].x && player.x < map[i].x + map[i].width){
            if(player.y + player.height >= map[i].y && player.y + player.height < map[i].y + map[i].height){
                jumpv = 0
                mapY += (player.y + player.height) - map[i].y
		jumpnum += 1
            }
        }
	if(player.y + player.height > map[i].y && player.y < map[i].y + map[i].height){
            if(player.x + player.width >= map[i].x && player.x + player.width < map[i].x + map[i].width){
		mapX += (player.x + player.width) - map[i].x
            }
        }
    }
}

startGame()