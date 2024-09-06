
const toggleButton = document.querySelector('.toggle-button');


let savedMode = localStorage.getItem('toggle');
if (savedMode) {
    document.body.classList.add(savedMode);
} else {
   
    savedMode = 'dark-mode';
    document.body.classList.add(savedMode);
    localStorage.setItem('toggle', savedMode);
}

toggleButton.addEventListener('click', function() {
    if (savedMode === 'dark-mode') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        savedMode = 'light-mode';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        savedMode = 'dark-mode';
    }
    localStorage.setItem('toggle', savedMode);

   
    console.log(localStorage.getItem('toggle'));
});