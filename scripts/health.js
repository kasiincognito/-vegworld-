class Health{
    constructor(){
        this.len = 0
        this.width = 150
        this.height = 30
    }
    low(){
        this.width -= 10
        this.update()
    }
    high(){
        this.width += 10
        this.update()
    }
    update(){
        ctx.fillStyle = "red"
        ctx.fillRect(10, 10, this.width, this.height)
    }
}