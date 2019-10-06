function AddButtonClicked(value) {
    var img = document.createElement("img")
    img.src = "resources/images/모형"+value+".png"
    img.name = value
    img.className = "Block"
    img.style.position = "absolute"
    img.style.left = window.innerWidth/2+"px"
    img.style.top = window.innerHeight/2-100+"px"
    img.onmousedown = BlockMouseDown
    document.getElementById("Canvas").appendChild(img)
}//버튼눌렀을때