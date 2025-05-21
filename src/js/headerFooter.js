const education = document.getElementById('education');
const contact = document.getElementById('contact');
const blog = document.getElementById('blog');
const project = document.getElementById('project');

// Education
education.addEventListener('mouseenter', () => {
    if (window.innerWidth > 480) {
        contact.style.borderLeft = 'none';
        blog.style.borderRight = 'none';

        education.style.borderLeft = '1px solid black';
        education.style.borderRight = '1px solid black';
    }
});

education.addEventListener('mouseleave', () => {
    if (window.innerWidth > 480) {
        contact.style.borderLeft = '1px solid black';
        blog.style.borderRight = '1px solid black';

        education.style.borderLeft = 'none';
        education.style.borderRight = 'none';
    }
});

// Blog
blog.addEventListener('mouseenter', () => {
    if (window.innerWidth > 480) {
        education.style.borderLeft = 'none';
        project.style.borderRight = 'none';

        blog.style.borderLeft = '1px solid black';
        blog.style.borderRight = '1px solid black';
    }
});

blog.addEventListener('mouseleave', () => {
    if (window.innerWidth > 480) {
        education.style.borderLeft = '1px solid black';
        project.style.borderRight = '1px solid black';

        blog.style.borderLeft = 'none';
        blog.style.borderRight = 'none';
    }
});