
const Coverphotos = [
    {album : "./coverphotos/DAILY MIX 1.png",title : "DAILY MIX 1", id : "Mix1"},
    {album : "./coverphotos/DAILY MIX 2.png",title : "DAILY MIX 2", id : "Mix2"},
    {album : "./coverphotos/DAILY MIX 3.png",title : "DAILY MIX 3", id : "Mix3"},
    {album : "./coverphotos/DAILY MIX 4.png",title : "DAILY MIX 4", id : "Mix4"},
    {album : "./coverphotos/DAILY MIX 5.png",title : "DAILY MIX 5", id : "Mix5"},
    {album : "./coverphotos/DAILY MIX 6.png",title : "DAILY MIX 6", id : "Mix6"}
]

function HomePage()
{
    var Items = document.getElementById("coveritem");
    
    // divNode.innerHTML = "";
    
    Coverphotos.forEach((photo) => {
        var divNode = document.createElement("div");
        divNode.setAttribute("class", "cover-item");
        
        var title = photo.title;
        var imgNode = document.createElement("img");
        imgNode.src = photo.album;
        imgNode.alt = photo.title;
        // var imgNode = "<img src=" + photo.album + " alt=" + photo.title + ">" + "<br>";
        var aNode = document.createElement("a");
        aNode.href= "./songpage.html?" + "id=" + photo.id;
        var h6Node = document.createElement("h6");
        
        h6Node.innerHTML = title;
        // divNode.innerHTML = album;
        // divNode.appendChild(imgNode);
        aNode.appendChild(h6Node);
        divNode.append(imgNode, aNode);
        Items.appendChild(divNode);
    })
}

