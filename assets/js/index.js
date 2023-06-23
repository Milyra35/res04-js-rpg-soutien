import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";

window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    
    let newCharacter = new Character(19, 15);
    newCharacter.render();
    
    window.addEventListener("keydown", function(event) {
        if(event.code === "KeyW")
        {
            newCharacter.moveUp();
        }
        else if(event.code === "KeyS")
        {
            newCharacter.moveDown();
        }
        else if(event.code === "KeyA")
        {
            newCharacter.moveLeft();
        }
        else if(event.code === "KeyD")
        {
            newCharacter.moveRight();
        }
    })
});