/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    // Get all content sections
    const profileSection = document.querySelector('#profile-content');
    const gamesSection = document.querySelector('#games-content');
    const statsSection = document.querySelector('#stats-content');
    
    // Get all nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Add click handlers to nav buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the appropriate section based on button clicked
            const buttonText = this.textContent.trim();
            
            if (buttonText === 'PROFIL') {
                profileSection.style.display = 'block';
                gamesSection.style.display = 'none';
                statsSection.style.display = 'none';
            } 
            else if (buttonText === 'Games') {
                profileSection.style.display = 'none';
                gamesSection.style.display = 'block';
                statsSection.style.display = 'none';
            }
            else if (buttonText === 'Statistiken') {
                profileSection.style.display = 'none';
                gamesSection.style.display = 'none';
                statsSection.style.display = 'block';
            }
        });
    });
});