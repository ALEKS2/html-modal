// get the modal element
var modal=document.getElementById('simpleModal');
// get open modal button
var modalBtn=document.getElementById('modalBtn');
// get close button
var closeBtn=document.getElementById('closeBtn');
// listen for a click event on the open modal button
modalBtn.addEventListener('click',openModal);
// listen for a click event on the close modal button
closeBtn.addEventListener('click',closeModal);
// listen for a click event outside the modal content
window.addEventListener('click',clickOutside);
// function to open modal
function openModal(){
    modal.style.display = 'block';
}
// function to close modal
function closeModal(){
    modal.style.display = 'none';
}
function clickOutside(e){
    if(e.target==modal){
        modal.style.display='none';
    }
}

