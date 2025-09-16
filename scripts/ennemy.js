function ennemy(){			// Objet ennemy "je ne sais pas trop comment le definir" (moule a ennemie).
    this.width = 50
    this.height = 50
    this.image = new Image()
    this.image.src = "assets/enemy1.png"
    this.ax = 0
    this.ay = 0
    this.jumpv = 0
    this.jumpnum = 0
    ctx = scene.context
    this.update = function( ){    
	if((this.x + this.ax) >= player.x){
	   this.ax -= 5
	}else if((this.x + this.ax) < player.x){
	   this.ax += 5
	}
	if((this.y + this.ay) >= player.y){
	   this.ay -= 5
	}else if((this.y + this.ay) < player.y){
	   this.ay += 5
	}
    	this.x = map[5].x
    	this.y = (map[5].y - map[5].height)
        ctx.drawImage(this.image, this.x + this.ax, this.y + this.ay, this.width, this.height)
    }
}