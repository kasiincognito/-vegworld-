function background(x, y, width, height, image){
	this.x = x
	this.y = y
	this.width = width
	this.height = height
	this.image = new Image()
	this.image.src = image
	this.update = function(){
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
	}
}