document.addEventListener("DOMContentLoaded", function () {
    const projectContainers = document.querySelectorAll('.project-iframe-container');
   
    projectContainers.forEach(container => {
        const content = container.querySelector('.Project-content');
       
        container.addEventListener('click', function(e) {
            // prevent click collision
            if (e.target.closest('.Project-content') && e.target !== content) {
                return;
            }
           
            // closes all the containers first
            projectContainers.forEach(otherContainer => {
                if (otherContainer !== container) {
                    const otherContent = otherContainer.querySelector('.Project-content');
                    otherContent.classList.remove('visible');
                    otherContainer.classList.remove('active');
                }
            });
            
            // close/open the container
            if (content.classList.contains('visible')) {
                content.classList.remove('visible');
                container.classList.remove('active');
            } else {
                content.classList.add('visible');
                container.classList.add('active');
            }
        });
       
        // Initialize all content to be hidden
        content.classList.remove('visible');
    });
});