export default function loadFloors(map)
{
    let section = document.querySelectorAll("body section");
    
    for (let i=0; i<map.length; i++)
    {
        for (let j=0; j<map[i].length; j++)
        {
            if(map[i][j] === "G")
            {
                section[i * map[i].length + j].classList.add("grass");
            }
            else if(map[i][j] === "W")
            {
                section[i * map[i].length + j].classList.add("water");
            }
            else if(map[i][j] === "S")
            {
                section[i * map[i].length + j].classList.add("sand");
            }
            else if(map[i][j] === "D")
            {
                section[i * map[i].length + j].classList.add("dirt");
            }
        }
    }
}