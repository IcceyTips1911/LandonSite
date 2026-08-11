function toggleResume() {
  const wrapper = document.getElementById('resume');
  const btn = document.getElementById('toggle-btn');
  
  if (wrapper.classList.contains('resume-card')) {
    wrapper.classList.remove('resume-card');
    wrapper.classList.add('enlarged-mode');
    btn.textContent = "Shrink Preview";
  } else {
    wrapper.classList.remove('enlarged-mode');
    wrapper.classList.add('resume-card');
    btn.textContent = "Enlarge Preview";
  }
}