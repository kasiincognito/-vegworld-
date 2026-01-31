function ennemy() {			// Objet ennemy "je ne sais pas trop comment le definir" (moule a ennemie).
   this.width = 50
   this.height = 50
   this.image = new Image()
   this.image.src = "assets/enemy1.png"
   this.ax = Math.random() * 1000
   this.ay = Math.random() * 1000
   this.jumpv = 0
   this.jumpnum = 0
   this.speed = 10
   ctx = scene.context
   is_x = false
   is_y = false
   this.update = function () {
      if ((this.x + this.ax) >= player.x) {
         this.ax -= Math.random() * this.speed
         is_x = false
      } else if ((this.x + this.ax) < player.x) {
         this.ax += Math.random() * this.speed
         is_x = false
      }
      else if(player.x - this.x <= 50 || this.x - player.x < 50){
         is_x = true
      }

      if ((this.y + this.ay) >= player.y) {
         this.ay -= Math.random() * this.speed
         is_y = false
      } else if ((this.y + this.ay) < player.y) {
         this.ay += Math.random() * this.speed
         is_y = false
      }
      else if(player.y - this.y <= 50 || this.x - player.x < 50){
         is_y = true
      }

      if(is_x == true && is_y == true){
         health_bar.low()
      }
      this.x = map[5].x
      this.y = (map[5].y - map[5].height)
      ctx.drawImage(this.image, this.x + this.ax, this.y + this.ay, this.width, this.height)
   }
}

