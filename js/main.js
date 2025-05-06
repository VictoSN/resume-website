const introductionProduct = document.getElementById('introductionProduct');
const introductionEducation = document.getElementById('introductionEducation');
const introductionContact = document.getElementById('introductionContact');

introductionProduct.addEventListener('mouseover', function() {
    introductionProduct.textContent = "Project";
    introductionProduct.offsetHeight;
});

introductionProduct.addEventListener('mouseout', function() {
    introductionProduct.textContent = "P";
    introductionProduct.offsetHeight;
});

introductionEducation.addEventListener('mouseover', function() {
    introductionEducation.textContent = "Education";
    introductionEducation.offsetHeight;
});

introductionEducation.addEventListener('mouseout', function() {
    introductionEducation.textContent = "E";
    introductionEducation.offsetHeight;
});

introductionContact.addEventListener('mouseover', function() {
    introductionContact.textContent = "Contact";
    introductionContact.offsetHeight;
});

introductionContact.addEventListener('mouseout', function() {
    introductionContact.textContent = "C";
    introductionContact.offsetHeight;
});