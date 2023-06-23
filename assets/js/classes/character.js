
class Character {
    #posX;
    #posY;
    
    constructor(posX, posY) {
        this.#posX = 19;
        this.#posY = 15;
    }
    
    get posX() {
        return this.#posX;
    }
    set posX(posX) {
        this.#posX = posX;
    }
    
    get posY() {
        return this.#posY;
    }
    set posY(posY) {
        this.#posY = posY;
    }
    
    moveUp() {
        
    }
    
    moveDown() {
        
    }
    
    moveLeft() {
        
    }
    
    moveRight() {
        
    }
    
    render() {
        
    }
}

export { Character };