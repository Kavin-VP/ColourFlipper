const bg=document.getElementById("box")
const button=document.getElementById("btn")
const colorCode=document.getElementById("code")

let hexVal=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
button.addEventListener("click",function changeBg()
    {
        let hashColor="#";
        for(let i=1;i<=6;i++)
            {
                hashColor+=randVal()
            }
            bg.style.backgroundColor=hashColor;
            colorCode.innerHTML=hashColor
    }
)
function randVal()
{
    return hexVal[Math.floor(Math.random()*16)]
}
