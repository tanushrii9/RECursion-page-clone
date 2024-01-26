const modeBtn = document.querySelector(".btn_indicator");
const body = document.querySelector("body");
const icon = document.querySelector("#btn_icon");
const likeIcon = document.querySelector(".like_icon");
const heart = document.querySelector(".heart");

let currMode = "light"; 

function changeIcon(icon){
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
    icon.classList.add(animated);

};


modeBtn.addEventListener("click", ()=>{
    if(currMode=== "light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }


});


document.querySelectorAll(".like_icon").forEach((heartobj)=>{
    heartobj.addEventListener('click', (event)=>{
        let parentDiv = event.target.parentElement.classList;
        let iconLike = event.target;
        var totalLikes = parseInt(event.target.parentElement.nextElementSibling.querySelector("span").innerHTML);
        if(parentDiv.contains("like")){
            totalLikes--;
            iconLike.innerHTML = "favorite_border";
            iconLike.style.color = "#574c4c"; 
            parentDiv.add("unlike");
            parentDiv.remove("like");
        }else{
            totalLikes++;
            iconLike.innerHTML = "favorite";
            iconLike.style.color = "#fc0362";
            parentDiv.add("like");
            parentDiv.remove("unlike");
        }
        event.target.parentElement.nextElementSibling.innerHTML = "<span>" + (totalLikes) + "</span>"; 

    });
});

const heading = {
    hd1 : "Javascript",
    hd2 : "Html",
    hd3 : "Css",

};

const search = () => {
    const searchBox = document.getElementById("search_item").value.toUpperCase();
    const storeIteams = document.querySelectorAll(".pdt");
    const iteam = document.querySelectorAll(".anchor");
    let iteamName = document.getElementsByClassName("heading").innerText;

    for(var i = 0; i < iteamName.length; i++){
        let match = iteam[i].getElementsByTagName("h3")[0];   


        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase.indexOf(searchBox) > -1){
                iteam[i].style.display = " ";
            }else{
                iteam[i].style.display = "none";
            }
        }
    }
};