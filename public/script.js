

// alert("ho hgya page load");

document.getElementById("downloadBtn").addEventListener("click", function() {
    // Replace "path/to/your/resume.pdf" with the actual path to your resume file
    var resumePath = "/images/Kaustubh_Pandey.pdf";
    alert("ho gya click")
    // Create a link element
    var link = document.createElement("a");
    
    // Set the href and download attributes
    link.setAttribute("href", resumePath);
    link.setAttribute("download", "resume.pdf");
    
    // Simulate a click on the link element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


// for the typewriter text

document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ["Full-Stack Developer", "Software Engineer", "Web Developer", "Coder", "Programmer"];
    
    // type one text in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // check if text isn't finished yet
        if (i < text.length) {
            // add next character to span
            document.getElementById("typewriter-text").innerHTML = text.substring(0, i + 1);

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100); // Adjust the typing speed here (in milliseconds)
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // start a typewriter animation for a text in the dataText array
    function startTextAnimation(i) {
        if (i < dataText.length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function() {
                // after callback (and whole text has been animated), start next text
                startTextAnimation(i + 1);
            });
        } else {
            // restart the animation after the last text
            setTimeout(function() {
                startTextAnimation(0);
            }, 1500); // Adjust the delay before restarting the animation (in milliseconds)
        }
    }

    // start the text animation
    startTextAnimation(0);
});


// for the skilss section 

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.techbut');
    const specs = document.querySelectorAll('.technica_specs');
    for (let i = 1; i < specs.length; i++) {
        specs[i].style.display = 'none';
    }
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            specs.forEach(spec => {
                spec.style.display = 'none'; // Hide all specs initially
            });
            document.getElementById(index + 1).style.display = 'inline-block'; // Show corresponding specs
        });
    });
});




 // Function to handle intersection observer callback
 function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the section is visible
});

// Observe each element with the hero class
document.querySelectorAll('.hero').forEach(hero => {
    observer.observe(hero);
});