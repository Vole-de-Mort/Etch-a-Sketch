const container = document.querySelector('div')
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

const colorpicker = document.getElementById('color2pick');

//Setting Default dimensions for 16*16
function setDefaultDimensions(){
for (var i = 0; i < 16*16 ; i++) {
    const child = document.createElement('div');
    child.classList.add("item");
    container.appendChild(child);
}
}
setDefaultDimensions();
// Setting up hovering function 
var children = document.querySelectorAll('.item');
function hovering(children){
    children.forEach((child)=>{
        colorpicker.addEventListener('input',()=>{
            child.addEventListener('mouseenter',()=>{
                const pickedcolor = colorpicker.value;
                child.style.backgroundColor=pickedcolor;
                console.log(pickedcolor);
            }); 
        });
    })
}


hovering(children);

// Function pour effacer

btn2.addEventListener('click',()=>{
    children.forEach((child)=>{
        child.addEventListener('mouseenter',()=>{
        child.style.backgroundColor='rgb(196, 203, 201)';
            })
        });
})
 

// Function To Clear the main container

function remove_Child(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

//reset btn
/*
btn3.addEventListener('click',remove_Child);
btn3.addEventListener('click',setDefaultDimensions);
var children = document.querySelectorAll('.item');
*/
hovering(children);

btn3.addEventListener('click', function () {
    container.childNodes.forEach(child => child.style.backgroundColor="rgb(196, 203, 201)");
});

// On hover

btn1.addEventListener('click',()=>{
    //Getting the new dimensions
    let new_dimension 
    do{
    new_dimension = prompt("Now You HAVE TO Set a new dimension between 1 and 100 :)");
    }while(isNaN(new_dimension) || new_dimension <= 0 || new_dimension > 100);
    
    remove_Child();
    for (var i = 0; i < new_dimension*new_dimension ; i++) {
        const child = document.createElement('div');
        child.classList.add("item");       
        child.style.minWidth = 100 / new_dimension +'%'
        container.appendChild(child);
    }
    children = document.querySelectorAll('.item');
    // Calling back hovering function for new dimension
    hovering(children);
});