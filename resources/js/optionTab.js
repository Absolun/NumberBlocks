function SwapVis() {
    var Helper = document.getElementById("Vis");
    Helper.style.display == "" ? Helper.style.display = "none" : Helper.style.display = "";
}
function SetSumHtml() {
    var sum = 0
    var Blocks = document.getElementsByClassName("Block")
    for (let block of Blocks) {
        sum += block.name * 1
    }
    document.getElementById("Sum").innerHTML = "Sum : " + sum
}
function Clear() {
    var list = document.getElementsByClassName("Block")
    var canvas = document.getElementById("Canvas")
    while(list[0])
        canvas.removeChild(list[0])
    MaxZIndex = 0
    document.getElementById("Sum").innerHTML = "Sum : 0"
}