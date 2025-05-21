document.addEventListener("DOMContentLoaded", function () {
    const projectContainers = document.querySelectorAll('.project-iframe-container');
    
    projectContainers.forEach(container => {
        const content = container.querySelector('.Project-content');
        
        container.addEventListener('click', function(e) {
            // prevent click colision
            if (e.target.closest('.Project-content') && e.target !== content) {
                return;
            }
            
            // closes all the containers first
            projectContainers.forEach(otherContainer => {
                if (otherContainer !== container) {
                    const otherContent = otherContainer.querySelector('.Project-content');
                    otherContent.style.display = 'none';
                    otherContainer.classList.remove('active');
                }
            });

            // close/open the container
            if (content.style.display === 'block') {
                content.style.display = 'none';
                container.classList.remove('active');
            } else {
                content.style.display = 'block';
                container.classList.add('active');

            }
        });
        
        // init all the content to be hidden, just in case
        content.style.display = 'none';
    });
});