const themeSelector = document.getElementById('theme');// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
    let theme = themeSelector.value;
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('img').src = 'images/byui-logo_white.png';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('img').src = 'images/byui_logo.webp';
    }
    
}
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!


// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);