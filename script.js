document.addEventListener("DOMContentLoaded", function() {
    const dot = document.getElementById('dot');
    
    dot.addEventListener('animationend', function() {
        dot.style.display = 'none';
        
        const container = document.querySelector('.container');
        const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink', 'cyan'];
        const numCircles = 100;  // Increase the number of circles

        for (let i = 0; i < numCircles; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            const color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.background = `radial-gradient(circle, ${color}, transparent)`;
            const endX = (Math.random() * 2 - 1).toFixed(2);
            const endY = (Math.random() * 2 - 1).toFixed(2);
            circle.style.setProperty('--endX', endX);
            circle.style.setProperty('--endY', endY);
            circle.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(circle);
        }

        setTimeout(() => {
            const message = document.getElementById('message');
            message.style.display = 'block';
        }, 3000);  // Display message after 3 seconds
    });
});
