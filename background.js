
console.log("Background Script Running");
function check() {
    document.getElementById('url').value = 'new value here'
} 
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', check);
    main();
  });