var dir = ""
var counter = 0

if(move === "right"){
    if(rightCounter >= right.length){
        rightCounter = 0
    }
    time = 15
    counter = rightCounter
    dir = right
}
else if(move === "left"){
    if(leftCounter >= left.length){
        leftCounter = 0
    }
    time = 15
    counter = leftCounter
    dir = left
}
else if(move === ""){
    if(idleCounter >= idle.length){
        idleCounter = 0
    }
    time = 5
    counter = idleCounter
    dir = idle
}

function anim(dir, counter){
    player.image.src = dir[counter]
    counter += 1
    
}

setInterval(anim(dir, counter), 1000/time)
