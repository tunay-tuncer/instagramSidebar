const themeButton = document.querySelector("#themeButton");
const root = document.querySelector(':root');
const logo = document.querySelector(".instaTextLogo")

const navItems = document.querySelectorAll(".navUl div")

const colors = {
    whiteBackground : "#ffffff",
    whiteText : "#ffffff",

    blackBackground :"#000000",
    blackText : "#000000",

    lightBorderColor : "#dbdbdb",
    darkBorderColor : "#262626"
}

let theme = "light"
function changeTheme(){
    if(theme == "light"){
        root.style.setProperty('--whiteBackground', colors.blackBackground);
        root.style.setProperty('--blackText', colors.whiteText);
        root.style.setProperty('--borderColor', colors.darkBorderColor);

        logo.src = "images/logo_small_white.png"

        theme = "black"
    }
    else{
        root.style.setProperty('--whiteBackground', colors.whiteBackground);
        root.style.setProperty('--blackText', colors.blackText);
        root.style.setProperty('--borderColor', colors.lightBorderColor);

        logo.src = "images/logo_small.png"

        theme = "light"
    }
}

// navItems.forEach((listItem)=>{
//     listItem.addEventListener("click", ()=>{
//         // listItem.style.fontWeight = "600"
//         const itemP = listItem.children[1]
//        if(!itemP.className.includes("bold")){
//         itemP.style.fontWeight = "600"
//         itemP.classList.add("bold")
//        }
//        else{
//         itemP.style.fontWeight = "100"
//         itemP.classList.remove("bold")
//        }
//     })
// })

themeButton.addEventListener("click",changeTheme)