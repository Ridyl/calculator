const buttonSelect = document.querySelectorAll('button');



// Adding an event listener for each button of the calculator
// Will use ID of each button to determine value
for(let i = 0; i < buttonSelect.length; i++) {
    buttonSelect[i].addEventListener('click', (e) => {
        console.log(e.target.getAttribute('id'));
    });
}