const introductionProduct = document.getElementById('introductionProduct');
const introductionEducation = document.getElementById('introductionEducation');
const introductionContact = document.getElementById('introductionContact');

introductionProduct.addEventListener('mouseover', function() {
    introductionProduct.textContent = "Project";
    introductionProduct.style.fontSize = "4em";
    introductionProduct.offsetHeight;
});

introductionProduct.addEventListener('mouseout', function() {
    introductionProduct.textContent = "P";
    introductionProduct.style.fontSize = "5em";
    introductionProduct.offsetHeight;
});

introductionEducation.addEventListener('mouseover', function() {
    introductionEducation.textContent = "Education";
    introductionEducation.style.fontSize = "4em";
    introductionEducation.offsetHeight;
});

introductionEducation.addEventListener('mouseout', function() {
    introductionEducation.textContent = "E";
    introductionEducation.style.fontSize = "5em";
    introductionEducation.offsetHeight;
});

introductionContact.addEventListener('mouseover', function() {
    introductionContact.textContent = "Contact";
    introductionContact.style.fontSize = "4em";
    introductionContact.offsetHeight;
});

introductionContact.addEventListener('mouseout', function() {
    introductionContact.textContent = "C";
    introductionContact.style.fontSize = "5em";
    introductionContact.offsetHeight;
});