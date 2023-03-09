const icon = document.querySelector('.dd');
const squares = document.querySelectorAll('.square')
const infoDisplay = document.querySelector("#info");

icon.addEventListener('dragstart',dragStart)
icon.addEventListener('drag',dragging)

squares.forEach(square=>{
    square.addEventListener('dragover',dragOver);
    square.addEventListener('dragenter',dragEnter);
    square.addEventListener('dragleave',dragLeave);
    square.addEventListener('drop',dragDrop);
    square.addEventListener('dragend',dragEnd);
})

let elementDragged ;

function dragging(){
    infoDisplay.textContent= "You are dragging a "+elementDragged.id;
}


function dragStart (e){
    elementDragged=e.target
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.target.classList.add('highlight');
}

function dragLeave(e){
    e.target.classList.remove('highlight');
}

function dragDrop(e){
    e.target.append(elementDragged);
}
function dragEnd(e){
    e.target.parentElement.classList.add('target');
    setTimeout(()=>{
        e.target.parentElement.classList.remove('target');
        e.target.parentElement.classList.remove('highlight');
    },1000)
}