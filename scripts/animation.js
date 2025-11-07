function animate() {    // responsable des animations du joueur
    time = 5
    if (move == "") {
        console.log("I'm not moving")
        if (idleCounter == idle.length) {
            idleCounter = 0
        }
        time = 3
        player.image.src = idle[idleCounter]
        idleCounter += 1
    }
    if (move == "right") {
        if (rightCounter == right.length) {
            rightCounter = 0
        }
        time = 10
        player.image.src = right[rightCounter]
        rightCounter += 1
    }
    if (move == "left") {
        if (leftCounter == left.length) {
            leftCounter = 0
        }
        time = 10
        player.image.src = left[leftCounter]
        leftCounter += 1
    }
    setTimeout(animate, 1000 / time)
}
animate()