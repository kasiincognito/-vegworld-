function startGame(){                                               // Premiere fonction lanceequand on commence le jeu
    scene.start()
    player = new player()
    player.update()
    move = ""
    jumpv = 
    vx = 
    jump = false
    map = []
    mapX = 500
    mapY = window.innerHeight * 0.2
    window.addEventListener("keydown" ,function(event){
        if(event.key === "ArrowRight"){
            move = "right"
        }
        if(event.key === "ArrowLeft"){
            move = "left"
        }
        if(event.key === "ArrowUp"){
            jumpv = 25
            jump = true
        }
    })
    window.addEventListener("keyup", function(event){
        if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
            move = ""
        }
    })
    tilemap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // Liste que la fonction drawMap suis pour dessiner la map
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,    // ca fait un peu peur oui 
               0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]
    drawMap(mapX, mapY, 0)
    setInterval(updateMap, 1000)
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

function player(){
    this.width = 60
    this.height = 120                                          // Objet player "je ne sais pas trop comment le definir" (moule a joueur).
    this.x = (window.innerWidth / 2) - (this.width / 2)
    this.y = (window.innerHeight * 0.2) + (60 * 2)
    ctx = scene.context
    this.update = function(){
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function tile(x, y, width, height){                         // Moule a carreaux dans la map
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    ctx = scene.context
    ctx.fillStyle = "red"
    ctx.fillRect(this.x, this.y, this.width, this.height)
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
            map.push(new tile(x, y, 60, 60))                // La map est compose de plusieurs carreaux donc on va dessiner plusieurs carreaux qui sera stocke dans la liste map
            map[i]
            x += 60
        }
        c += 1
    }
}

function updateMap(){       // Fonction qui est appelee chaque 20millisecondes contenant toutes les instructions permettant la mise a jour de l'interface a chaque frame
    scene.clear()   
    map = []
    drawMap(mapX, mapY, 0)
    player.update()
    
    for(var i = 0; i < tilemap.length; i++){    // collision detection (not really working)
        if(tilemap[o] == 1){
            if(player.x + player.width > map[i].x || player.x < map[i].x + map[i].width){
                if(player.y >= map[i].y){
                    jumpv = false
                }
            }
        }
        else{
            
        }
    }                                    
    
    if(move === "right"){
        vx = -10
    }
    else if(move === "left"){
        vx = 10
    }
    else if(move === ""){
        vx = 0
    }

    if(jump == true){
        jumpv -= 2
    }

    mapX += vx
    mapY += jumpv
}

startGame()