function player(image) {
    this.width = 60
    this.height = 120
    this.vx = 0
    this.jumpv = 0
    this.jumpnum = 0
    this.image = new Image()
    this.image.src = "assets/idle1.png"
    this.x = (window.innerWidth / 2) - (this.width / 2)
    this.y = (window.innerHeight * 0.2) + (60 * 2)
    ctx = scene.context
    this.update = function () {
        this.jumpv -= 2
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    this.move = function (dir) {

        if (dir === "right") {
            this.vx = -13
        }
        else if (dir === "left") {
            this.vx = 13
        }
        else if (dir === "") {
            if (this.vx > 0) {
                this.vx -= 1
            }
            if (this.vx < 0) {
                this.vx += 1
            }
        }

    }
}