// Example of a simple script to add interactivity
document.querySelectorAll('.service-box').forEach(item => {
    item.addEventListener('click', () => {
        alert('You clicked on a service!');
    });
});
