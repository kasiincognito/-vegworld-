function player(x, y, width, height, src, rightArray){
    this.x = x
    this.y = y
    this.move
    this.rightArray = rightArray
    this.width = width
    this.height = height
    this.image = new Image()
    this.image.src = src
    ctx = scene.context
    this.i = 1

    this.update = function(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    this.idle = function(){
        if(character.image.src == '../-vegworld-/assets/idle1.png'){
            character.image.src = '../-vegworld-/assets/idle2.png'
        }
        else{
            character.image.src = '../-vegworld-/assets/idle1.png'
        }
    }
    this.right = function(){
        if(this.i >= 3){
            this.i = 1
        }
        
        character.image.src = rightArray[this.i]
        this.i += 1
    }
}