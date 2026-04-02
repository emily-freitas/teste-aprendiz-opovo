document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.cast-grid');
  
  if (grid) {
    let isDown = false;
    let startX;
    let scrollLeft;

    grid.addEventListener('mousedown', (e) => {
      isDown = true;
      grid.style.cursor = 'grabbing';
      startX = e.pageX - grid.offsetLeft;
      scrollLeft = grid.scrollLeft;
    });

    grid.addEventListener('mouseleave', () => {
      isDown = false;
      grid.style.cursor = 'grab';
    });

    grid.addEventListener('mouseup', () => {
      isDown = false;
      grid.style.cursor = 'grab';
    });

    grid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - grid.offsetLeft;
      const walk = (x - startX) * 1.5;
      grid.scrollLeft = scrollLeft - walk;
    });

    grid.style.cursor = 'grab';
  }
});