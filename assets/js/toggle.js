/* Make localStorage save site preferences for the dark mode option */

let darkMode = localStorage.getItem('dark-mode');
const darkModeToggle = document.querySelector('#mode');

// Check if dark mode is enabled. If so, turn it of.
// Otherwise, turn it on
const enableDarkMode = () => {
    document.body.classList.add('darkmode') // add 'dark' class to the body (has to be defined in scss file)
    localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode') // add 'dark' class to the body (has to be defined in scss file)
    localStorage.setItem('dark-mode', null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode !== 'enabled')  {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
