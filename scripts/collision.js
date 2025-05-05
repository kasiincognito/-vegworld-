function verifCollision(main, target){
    if(main.x + main.width > target.x && main.x < target.x + target.width){
        if(main.y + main.height >= target.y && main.y + main.height < target.y + target.height){
            jumpv = 0
            mapY += (main.y + main.height) - target.y
            jumpnum += 1
        }
    }
    if(main.y + main.height > target.y && main.y < target.y + target.height){
        if(main.x + main.width >= target.x && main.x + main.width < target.x + target.width){
            mapX += (main.x + main.width) - target.x
        }
    }
}