document.addEventListener("DOMContentLoaded", () => {
    let darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.querySelector('.theme-switch'); // Using querySelector

    console.log("Theme switch element:", themeSwitch);

    const enableDarkMode = () => {
        document.documentElement.classList.add('darkmode');  // Apply to `html` instead of `body`
        localStorage.setItem('darkmode', 'active');
    };

    const disableDarkMode = () => {
        document.documentElement.classList.remove('darkmode'); 
        localStorage.setItem('darkmode', 'inactive');
    };

    // Apply dark mode on page load if stored in localStorage
    if (darkmode === 'active') {
        enableDarkMode();
    }

    // Add event listener only if themeSwitch exists
    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            darkmode = localStorage.getItem('darkmode');
            darkmode !== "active" ? enableDarkMode() : disableDarkMode();
        });
    } else {
        console.error("Theme switch button not found! Check if it exists in your HTML.");
    }
});
