document.addEventListener('DOMContentLoaded', function() {
    const ellipse = document.querySelector('.ellipse-container');
  
    ellipse.addEventListener('mousemove', (e) => {
      const rect = ellipse.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
      ellipse.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    });
  
  });


