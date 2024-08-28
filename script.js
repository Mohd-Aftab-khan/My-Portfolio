



// filter section

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


//typed.js
var typed = new Typed('#element', {
    strings: ['I am<i> Mohd Aftab</i>', ' <i>And I am a Web Developer'],
    typeSpeed: 50,
  });





  //skill section


  document.querySelectorAll('.circle').forEach(circle => {
    const percentage = circle.getAttribute('data-percentage');
    circle.style.background = `conic-gradient(${getColor(percentage)} 0% ${Math.abs(percentage)}%, #e6e6e6 ${Math.abs(percentage)}% 100%)`;
});

function getColor(percentage) {
    if (percentage >=90) {
        return percentage >= 90 ? '#119b16' : '#ff9800';
    }else if (percentage >= 70) {
        return percentage >= 70 ? 'rgb(206, 6, 206)' : '#ff9800';
    }
     else {
        return '#ff1101';
    }
}



//form


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const form = event.target;
    if (form.checkValidity()) {
        // Form is valid, perform your submission logic here
        const name = document.getElementById('first-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display a success message
        document.getElementById('response').innerText = `Form submitted successfully! Name: ${name}, Email: ${email}`;

        // Clear the form fields after submission
        form.reset(); // This will clear all the fields
    } else {
        // If the form is not valid, trigger HTML5 validation
        form.reportValidity();
    }
});


//theme
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});