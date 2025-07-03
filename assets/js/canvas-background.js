// Canvas background animation
document.addEventListener('DOMContentLoaded', function() {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'backgroundCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3'; // Subtle background
    document.body.prepend(canvas);
    
    // Initialize canvas
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Handle resize
    window.addEventListener('resize', function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    // Create particles
    const particleCount = 100;
    const particles = [];
    
    // Mouse interaction
    let mouseX = width / 2;
    let mouseY = height / 2;
    
    window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = '#ffffff';
            this.alpha = Math.random() * 0.2;
        }
        
        update() {
            // Move
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Edge detection
            if (this.x > width || this.x < 0) {
                this.speedX *= -1;
            }
            
            if (this.y > height || this.y < 0) {
                this.speedY *= -1;
            }
            
            // Mouse interaction
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                // Move away from mouse
                this.x += dx * 0.01;
                this.y += dy * 0.01;
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        drawConnections(particles) {
            for (let i = 0; i < particles.length; i++) {
                const otherParticle = particles[i];
                const dx = this.x - otherParticle.x;
                const dy = this.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance/1000})`;
                    ctx.lineWidth = 0.2;
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            particles[i].drawConnections(particles);
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
});
