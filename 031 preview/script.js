const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('QQ HEY!');
// };

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElement); 
// overlay.addEventListener('click', deleteElement); 

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
}); 

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target)
});