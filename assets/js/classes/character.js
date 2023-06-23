
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
        let newPosition = document.querySelector(`.col-${this.#posX}.row-${this.#posY - 1}`);
        
        if(this.#posY >= 0)
        {
            if(newPosition.classList.contains("water") || 
               newPosition.classList.contains("tree") ||
               newPosition.classList.contains("rock") ||
               newPosition.classList.contains("stump") ||
               this.#posY < 0)
            {
                return false;
            }
            else 
            {
                this.#posY--;
                this.render();
            }
        }
    }
    
    moveDown() {
        let newPosition = document.querySelector(`.col-${this.#posX}.row-${this.#posY + 1}`);
        
        if(this.#posY <= 19)
        {
            if(newPosition.classList.contains("water") || 
               newPosition.classList.contains("tree") ||
               newPosition.classList.contains("rock") ||
               newPosition.classList.contains("stump") ||
               this.#posY > 19)
            {
                return false;
            }
            else 
            {
                this.#posY++;
                this.render();
            }
        }
    }
    
    moveLeft() {
        let newPosition = document.querySelector(`.col-${this.#posX - 1}.row-${this.#posY}`);
        
        if(this.#posX >= 0)
        {
            if(newPosition.classList.contains("water") || 
               newPosition.classList.contains("tree") ||
               newPosition.classList.contains("rock") ||
               newPosition.classList.contains("stump"))
            {
                return false;
            }
            else 
            {
                this.#posX--;
                this.render();
            }
        }
    }
    
    moveRight() {
        let newPosition = document.querySelector(`.col-${this.#posX + 1}.row-${this.#posY}`);
        
        if(this.#posX <= 29)
        {
            if(newPosition.classList.contains("water") || 
               newPosition.classList.contains("tree") ||
               newPosition.classList.contains("rock") ||
               newPosition.classList.contains("stump") ||
               this.#posX > 29)
            {
                return false;
            }
            else 
            {
                this.#posX++;
                this.render();
            }
        }
    }
    
    render() {
        let sections = document.querySelectorAll("body section");
        
        for(let i=0; i<sections.length; i++)
        {
            if(sections[i].classList.contains("character"))
            {
                sections[i].classList.remove("character")
            }
        }
        
        let newPosition = document.querySelector(`.col-${this.#posX}.row-${this.#posY}`);
        newPosition.classList.add("character");
    }
    
    godMode() {
        
    }
}

export { Character };