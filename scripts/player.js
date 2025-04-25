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