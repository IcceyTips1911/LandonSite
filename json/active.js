const navText = document.querySelectorAll('a');

navText.forEach(item => {
  item.addEventListener('click', function() {
    // 1. Find the current active element and remove its active class
    document.querySelector('a.active')?.classList.remove('active');
    
    // 2. Add the active class to the clicked element
    this.classList.add('active');
  });
});