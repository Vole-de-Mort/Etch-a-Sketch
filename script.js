const container = document.querySelector('div')
for (var i = 0; i < 16*16 ; i++) {
    const child = document.createElement('div');
    child.classList.add("item");
    container.appendChild(child);
}
const children = document.querySelectorAll('.item')
const colorpicker = document.getElementById('color2pick');
//console.log(pickedcolor);
children.forEach((child)=>{
    colorpicker.addEventListener('input',()=>{
        child.addEventListener('mouseenter',()=>{
            const pickedcolor = colorpicker.value;
            child.style.backgroundColor=pickedcolor;
        }); 
    });
})
function remove_Child(){
    const childs = document.querySelectorAll('.item');
    childs.forEach((child)=>{child.remove();});
}
function changeDimension(){
    let new_dimension 
    do{
    new_dimension = prompt("Now You HAVE TO Set a new dimension between 1 and 100 :)");
    }while(isNaN(new_dimension) || new_dimension <= 0 || new_dimension > 100);
    new_height = Math.round(416/new_dimension);
    new_width = Math.round(616/new_dimension);
    console.log(new_height, new_width);
    remove_Child();
    for (var i = 0; i < new_dimension*new_dimension ; i++) {
        const child = document.createElement('div');
        child.classList.add("item");
        child.style.height = new_height + 'px';
        child.style.width = new_width + 'px';
        container.appendChild(child);
    }
}
