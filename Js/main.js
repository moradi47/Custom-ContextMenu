let menu = document.querySelector('.container');

document.addEventListener('contextmenu',function(event){
    event.preventDefault();
    
    menu.style.display = 'block';
    menu.style.top = event.pageY+"px";
    menu.style.left = event.pageX+"px";
    
})

document.addEventListener('click', function(){
    menu.style.display = 'none';
})