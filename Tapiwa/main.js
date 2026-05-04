window.addEventListener('load', () => {
    const progressBar = document.getElementById('progress-bar');
    const counter = document.getElementById('counter');
    const splashScreen = document.getElementById('splash-screen');
    const loginBox = document.getElementById('loginBox');

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            // Hide splash and show login after completion
            splashScreen.style.display = 'none';
            loginBox.style.display = 'flex';
        } else {
            width++;
            progressBar.style.width = width + '%';
            counter.innerText = width + '%';
        }
    }, 30); // Adjust speed here (lower is faster)
});
