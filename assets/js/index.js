import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";

window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    
    let newCharacter = new Character(19, 15);
    newCharacter.render();
    
    window.addEventListener("keydown", function(event) {
        if(event.code === "KeyW" || event.code === "ArrowUp")
        {
            newCharacter.moveUp();
        }
        else if(event.code === "KeyS" || event.code === "ArrowDown")
        {
            newCharacter.moveDown();
        }
        else if(event.code === "KeyA" || event.code === "ArrowLeft")
        {
            newCharacter.moveLeft();
        }
        else if(event.code === "KeyD" || event.code === "ArrowRight")
        {
            newCharacter.moveRight();
        }
        else if(event.code === "Space")
        {
            newCharacter.godMode();
        }
    })
});