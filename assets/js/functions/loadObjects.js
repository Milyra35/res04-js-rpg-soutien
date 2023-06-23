export default function loadObjects(objects)
{
    for(let i=0; i<objects.length; i++)
    {
        let object = objects[i];
        let box = document.querySelector(`.col-${object.posX}.row-${object.posY}`);
        
        if(object.type === "tree")
        {
            box.classList.add("tree");
        }
        else if(object.type === "rock")
        {
            box.classList.add("rock");
        }
        else if(object.type === "stump")
        {
            box.classList.add("stump");
        }
    }
}