let navbarMenu = document.querySelector('.navbar-menu');
let dropdownIsOpen = false;

//dark mode code 
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});


// Handle dropdown menu toggle
navbarMenu.addEventListener('click', (event) => {
  if (event.target.classList.contains('dropdown-toggler')) {
    let target = document.querySelector(`#${event.target.dataset.dropdown}`);

    if (target) {
      if (target.classList.contains('show')) {
        target.classList.remove('show');
        dropdownIsOpen = false;
      } else {
        target.classList.add('show');
        dropdownIsOpen = true;
      }
    }
  }
});

// Handle closing dropdowns if a user clicks outside
document.body.addEventListener('click', (event) => {
  if (dropdownIsOpen) {
    navbarMenu.querySelectorAll('.dropdown').forEach((dropdown) => {
      let targetIsDropdown = dropdown == event.target;
      let clickedOnDropdownToggle = event.target.classList.contains('dropdown-toggler');

      if (clickedOnDropdownToggle) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });
  }
});




// Check the user's preferred mode (optional)
// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
// if (prefersDarkMode.matches) {
//     modeToggle.checked = true;
//     body.classList.add('dark-mode');
// } else {
//     body.classList.add('light-mode');
// }


// Open links in mobiles
function handleSmallScreens() {
  document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if (!navbarMenu.classList.contains('active')) {
      navbarMenu.classList.add('active');
    } else {
      navbarMenu.classList.remove('active');
    }
  });
}

handleSmallScreens();



// const modeToggle = document.getElementById('mode-toggle');
// const body = document.body;

// modeToggle.addEventListener('change', () => {
//     if (modeToggle.checked) {
//         body.classList.add('dark-mode');
//         body.classList.remove('light-mode');
//     } else {
//         body.classList.remove('dark-mode');
//         body.classList.add('light-mode');
//     }
// });

// // Check the user's preferred mode (optional)
// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
// if (prefersDarkMode.matches) {
//     modeToggle.checked = true;
//     body.classList.add('dark-mode');
// } else {
//     body.classList.add('light-mode');
// }

