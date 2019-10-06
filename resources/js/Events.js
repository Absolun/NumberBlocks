var cursorX;
var cursorY;
function GetMousePosition(e) {
    cursorX = e.pageX;
    cursorY = e.pageY;
}

window.onload = function() {
    document.onmousemove = GetMousePosition
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}

window.oncontextmenu = function ()
{
    return false;
}

var Ctrl = false
window.onkeydown = function(event) {
    switch(event.keyCode) {
        case 65: //a
            var Sum = document.getElementById("Sum")
            Sum.style.display == "" ? Sum.style.display = "none" : Sum.style.display = ""
            break //Sum.innerHTML = asdfasdf
        case 90: //z
        case 88: //x
        case 67: //c
            if(Ctrl) AlignElements(event.keyCode)
            else AddChild(event.keyCode)
            this.SetSumHtml()
            break
        case 17:
            Ctrl = true
            break
    }
}
window.onkeyup = function(event) {
    if(event.keyCode == 17) {
        Ctrl = false
    }
} //Ctrl 변수
function BlockMouseDown(e) {
    switch(e.which) {
        case 1: //왼쪽버튼
            if(Ctrl) {
                var src = document.getElementById("Canvas")
                src.removeChild(e.target)
                SetSumHtml()
                return
            }
            //드래그이벤트
            break
        case 2: //중간버튼
            DisAssemble(e.target)
            break
        case 3: //오른쪽버튼
            Assemble(e.target)
            break
    }
}