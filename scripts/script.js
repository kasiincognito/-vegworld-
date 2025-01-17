function startGame(){
    scene.start()
    player = new player()
    player.update()
    move = ""
    jumpv = 
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
    tilemap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
               1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]
    drawMap(mapX, mapY, 0)
    setInterval(updateMap, 20)
}

var scene = {
    canvas : document.createElement("canvas"),
    start : function(){                                     // Méthode start() pour l'objet myGameArea pour créer le canvas
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        
    },
    clear : function() {                                    // Méthode utilisée pour effacer le contenu du canvas et reremplir dans la fonction updateMap
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
}

function player(){
    this.width = 60
    this.height = 120
    ctx = scene.context
    this.update = function(){
        this.x = (window.innerWidth / 2) - (this.width / 2)
        this.y = (window.innerHeight * 0.2) + (60 * 2)
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function tile(x, y, width, height){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    ctx = scene.context
    ctx.fillStyle = "red"
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

function drawMap(mapX, mapY, c){
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
            map.push(new tile(x, y, 60, 60))
            x += 60
        }
        c += 1
    }
}

function updateMap(){
    
    if(move === "right"){
        for(var i = 0; i < map.length; i++){
            if(player.x + player.width < map[i].x){
                mapX -= 10
                scene.clear()
                drawMap(mapX, mapY, 0)
            }
        }
    }
    if(move === "left"){
        mapX += 10
        scene.clear()
        drawMap(mapX, mapY, 0)
    }
    else{

    }

    if(jump == true){
        mapY += jumpv
        scene.clear()
        drawMap(mapX, mapY, 0)
        jumpv -= 2
    }
    player.update()
}

startGame()