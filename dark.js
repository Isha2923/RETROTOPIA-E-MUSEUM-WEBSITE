const modeToggle = document.getElementById('mode-toggle');
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

// Check the user's preferred mode (optional)
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkMode.matches) {
    modeToggle.checked = true;
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}
