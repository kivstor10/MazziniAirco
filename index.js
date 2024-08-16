document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('.contact_us_button');
    const contactImage = contactButton.querySelector('img');


    contactButton.addEventListener('mouseenter', function () {
        contactImage.src = 'assets/chevron_right_black.svg';
    });

    contactButton.addEventListener('mouseleave', function () {
        contactImage.src = 'assets/chevron_right.svg';
    });

    // Opposite
    const workwithButton = document.querySelector('#business_story > div > a');
    const workwithImage = workwithButton.querySelector('img');


    workwithButton.addEventListener('mouseenter', function () {
        workwithImage.src = 'assets/chevron_right_black.svg';
    });

    workwithButton.addEventListener('mouseleave', function () {
        workwithImage.src = 'assets/chevron_right.svg';
    });
});
