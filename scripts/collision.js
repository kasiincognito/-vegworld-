function checkCollision(main, target, type){
    if(type === "player"){
	if(main.x + main.width > target.x && main.x < target.x + (target.width / 2)){
        	if(main.y + main.height >= target.y && main.y + main.height < target.y + target.height){
            		main.jumpv = 0
            		mapY += (main.y + main.height) - target.y
            		main.jumpnum += 1
			background.y -= ((main.y + main.height) - target.y) / 10
        	}
    	}
    	if(main.x < target.x + target.width && main.x > target.x){
        	if(main.y + main.height >= target.y && main.y + main.height < target.y + target.height){
            		main.jumpv = 0
            		mapY += (main.y + main.height) - target.y
            		main.jumpnum += 1
        	}
    	}
    	if(main.y + main.height > target.y && main.y < target.y + target.height){
        	if(main.x + main.width >= target.x && main.x + main.width < target.x + (target.width / 2)){
            		mapX += (main.x + main.width) - target.x
        	}
        	if(main.x > target.x && main.x < target.x + target.width){
            		mapX -= (target.x + target.width) - main.x
        	}
    	}
    }else if(type === "entity"){
    	if((main.y + main.ay) + main.height > target.y && (main.y + main.ay) < target.y + target.height){
        	if((main.x + main.ax) + main.width >= target.x && (main.x + main.ax) + main.width < target.x + (target.width / 2)){
            		main.ax -= ((main.x + main.ax) + main.width) - target.x
        	}
        	if((main.x + main.ax) > target.x && (main.x + main.ax) < target.x + target.width){
            		main.ax += (target.x + target.width) - (main.x + main.ax)
        	}
    	}if((main.x + main.ax) + main.width > target.x && (main.x + main.ax) < target.x + (target.width / 2)){
        	if((main.y + main.ay) + main.height >= target.y && (main.y + main.ay) + main.height < target.y + target.height){
            		main.jumpv = 0
            		main.ay -= ((main.y + main.ay) + main.height) - target.y
            		main.jumpnum += 1
        	}
    	}
    	if((main.x + main.ax) < target.x + target.width && (main.x + main.ax) > target.x){
        	if((main.y + main.ay) + main.height >= target.y && (main.y + main.ay) + main.height < target.y + target.height){
            		main.jumpv = 0
            		main.y += ((main.y + main.ay) + main.height) - target.y
            		main.jumpnum += 1
        	}
    	}
	
    }
}