var MaxZIndex = 0

function AddChild(Key) {
    switch (Key) {
        case 90:
            var img = document.createElement("img")
            img.src = "resources/images/모형1.png"
            img.name = "1"
            img.className = "Block"
            img.style.position = "absolute"
            img.style.left = cursorX - 10 + "px"
            img.style.top = cursorY - 5 + "px"
            img.onmousedown = BlockMouseDown
            var src = document.getElementById("Canvas")
            src.appendChild(img)
            break
        case 88:
            var img = document.createElement("img")
            img.src = "resources/images/모형10.png"
            img.name = "10"
            img.className = "Block"
            img.style.position = "absolute"
            img.style.left = cursorX - 10 + "px"
            img.style.top = cursorY - 50 + "px"
            img.onmousedown = BlockMouseDown
            var src = document.getElementById("Canvas")
            src.appendChild(img)
            break
        case 67:
            var img = document.createElement("img")
            img.src = "resources/images/모형100.png"
            img.name = "100"
            img.className = "Block"
            img.style.position = "absolute"
            img.style.left = cursorX - 50 + "px"
            img.style.top = cursorY - 50 + "px"
            img.onmousedown = BlockMouseDown
            var src = document.getElementById("Canvas")
            src.appendChild(img)
            break
    }
}
function AlignElements(Key) {
    MaxZIndex++
    switch (Key) {
        case 90:
            var Blocks = document.getElementsByName("1") //낮은거부터
            for(var i = 0; i < Blocks.length; i++) {
                Blocks[i].style.zIndex = MaxZIndex
                Blocks[i].style.left = cursorX + parseInt(i / 5) * 20 + parseInt(i / 10) * 10 + parseInt(i / 100) * 20 + "px"
                Blocks[i].style.top = cursorY - i % 5 * 15 + "px"
            }
            break
        case 88:
            var Blocks = document.getElementsByName("10")
            for(var i = 0; i < Blocks.length; i++) {
                Blocks[i].style.zIndex = MaxZIndex
                Blocks[i].style.left = cursorX + i % 60 * 19 + parseInt(i % 60 / 10) * 20 + "px"
                Blocks[i].style.top = cursorY + parseInt(i / 60) * 200 + "px"
            }
            break
        case 67:
            var Blocks = document.getElementsByName("100")
            for(var i = 0; i < Blocks.length; i++) {
                Blocks[i].style.zIndex = MaxZIndex
                Blocks[i].style.left = cursorX + 60 - i % 50 % 5 * 15 + parseInt(i % 50 / 5) * 160 + "px"
                Blocks[i].style.top = cursorY - 60 + i % 5 * 15+ parseInt(i / 50) * 220 + "px"
            }
            break
    }
}
function DisAssemble(sender) {
    switch (sender.name) {
        case "10":
            var top = parseInt(sender.style.top)
            var left = sender.style.left
            var src = document.getElementById("Canvas")
            src.removeChild(sender)
            for (var i = 0; i < 10; i++) {
                var img = document.createElement("img")
                img.src = "resources/images/모형1.png"
                img.name = "1"
                img.className = "Block"
                img.style.position = "absolute"
                img.style.left = left
                img.style.top = top - 15 * i + 130 + "px"
                img.onmousedown = BlockMouseDown
                src.appendChild(img)
            }
            break
        case "100":
            var top = sender.style.top
            var left = parseInt(sender.style.left)
            var src = document.getElementById("Canvas")
            src.removeChild(sender)
            for (var i = 0; i < 10; i++) {
                var img = document.createElement("img")
                img.src = "resources/images/모형10.png"
                img.name = "10"
                img.className = "Block"
                img.style.position = "absolute"
                img.style.left = left * 1 + 18 * i + "px"
                img.style.top = top
                img.onmousedown = BlockMouseDown
                src.appendChild(img)
            }
            break
    }
}
function Assemble(sender) {
    var Blocks = document.getElementsByName(sender.name)
    if (sender.name == "100" || Blocks.length < 10) return

    var canvas = document.getElementById("Canvas")
    var img = document.createElement("img")
    img.src = "resources/images/모형"+sender.name+"0.png"
    img.name = sender.name+"0"
    img.className = "Block"
    img.style.position = "absolute"
    img.style.left = sender.style.left
    img.style.top = sender.style.top
    img.onmousedown = BlockMouseDown
    for(var i = 0; i < 10; i++)
        canvas.removeChild(Blocks[0])
    canvas.appendChild(img)
}
function startDrag(e) {
    if (e.which != 1) return
    if (!e) var e = window.event
    if (e.preventDefault) e.preventDefault()

    targ = e.target ? e.target : e.srcElement

    if (targ.className != 'Block') return

        offsetX = e.clientX
        offsetY = e.clientY

    if (!targ.style.left) targ.style.left='0px'
    if (!targ.style.top) targ.style.top='0px'

    targ.style.zIndex = ++MaxZIndex
    coordX = parseInt(targ.style.left)
    coordY = parseInt(targ.style.top)
    drag = true;

    document.onmousemove=dragDiv
    return false;

}
function dragDiv(e) {
    if (!drag) return
    if (!e) var e= window.event

    targ.style.left=coordX+e.clientX-offsetX+'px'
    targ.style.top=coordY+e.clientY-offsetY+'px'
    return false
}
function stopDrag() {
    drag=false
    document.onmousemove = GetMousePosition
}