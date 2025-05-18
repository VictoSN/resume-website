// Get elements
const education = document.getElementById('education');
const contact = document.getElementById('contact');
const project = document.getElementById('project');

// Add event listeners for hover behavior
education.addEventListener('mouseenter', () => {
    if (window.innerWidth > 480) {
        contact.style.borderLeft = 'none';
        project.style.borderRight = 'none';

        education.style.borderLeft = '1px solid black';
        education.style.borderRight = '1px solid black';
    }
});

education.addEventListener('mouseleave', () => {
    if (window.innerWidth > 480) {
        contact.style.borderLeft = '1px solid black';
        project.style.borderRight = '1px solid black';

        education.style.borderLeft = 'none';
        education.style.borderRight = 'none';
    }
});

