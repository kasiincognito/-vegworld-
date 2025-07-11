var scene = {
    canvas : document.createElement("canvas"),
    start : function(){                                     // Methode start() pour l'objet scene afin de creer le canvas
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        
    },
    clear : function() {                                    // Methode utilisee pour effacer le contenu du canvas et reremplir dans la fonction updateMap
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
}
