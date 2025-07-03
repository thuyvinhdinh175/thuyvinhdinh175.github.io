// Background selector
document.addEventListener('DOMContentLoaded', function() {
    // Create background control panel
    const controlPanel = document.createElement('div');
    controlPanel.className = 'background-controls';
    controlPanel.innerHTML = `
        <button id="bgOption1" class="bg-option active">Pattern</button>
        <button id="bgOption2" class="bg-option">Particles</button>
        <button id="bgOption3" class="bg-option">Network</button>
    `;
    document.body.appendChild(controlPanel);
    
    // Style for control panel
    const style = document.createElement('style');
    style.textContent = `
        .background-controls {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            gap: 10px;
            z-index: 1000;
            opacity: 0.2;
            transition: opacity 0.3s;
        }
        
        .background-controls:hover {
            opacity: 1;
        }
        
        .bg-option {
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 5px 10px;
            border-radius: 15px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s;
        }
        
        .bg-option:hover {
            background: rgba(0, 0, 0, 0.7);
        }
        
        .bg-option.active {
            background: var(--primary-text);
            color: var(--primary-bg);
            border-color: var(--primary-text);
        }
    `;
    document.head.appendChild(style);
    
    // Get script elements
    const patternScript = document.querySelector('script[src="assets/js/background.js"]');
    let canvasScript = document.querySelector('script[src="assets/js/canvas-background.js"]');
    
    // If canvas script doesn't exist yet, create a reference element
    if (!canvasScript) {
        canvasScript = document.createElement('script');
        canvasScript.id = 'canvasScript';
    }
    
    // Background pattern element
    let backgroundPattern = document.querySelector('.background-pattern');
    let canvas = document.querySelector('#backgroundCanvas');
    
    // Handle background changes
    document.getElementById('bgOption1').addEventListener('click', function() {
        setActiveButton(this);
        enablePatternBackground();
    });
    
    document.getElementById('bgOption2').addEventListener('click', function() {
        setActiveButton(this);
        enableCanvasBackground();
    });
    
    document.getElementById('bgOption3').addEventListener('click', function() {
        setActiveButton(this);
        enableNetworkBackground();
    });
    
    function setActiveButton(button) {
        document.querySelectorAll('.bg-option').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    }
    
    function enablePatternBackground() {
        // Remove canvas if exists
        if (canvas) {
            canvas.remove();
            canvas = null;
        }
        
        // Ensure pattern script is loaded
        if (!patternScript) {
            const script = document.createElement('script');
            script.src = 'assets/js/background.js';
            document.body.appendChild(script);
        } else {
            // If script exists but pattern doesn't, recreate it
            if (!backgroundPattern) {
                // Create background pattern container
                backgroundPattern = document.createElement('div');
                backgroundPattern.className = 'background-pattern';
                document.body.appendChild(backgroundPattern);
                
                // Create particles
                for (let i = 0; i < 50; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    backgroundPattern.appendChild(particle);
                }
            }
        }
    }
    
    function enableCanvasBackground() {
        // Remove pattern background
        if (backgroundPattern) {
            backgroundPattern.remove();
            backgroundPattern = null;
        }
        
        // Create canvas with gradient animation
        canvas = document.createElement('canvas');
        canvas.id = 'backgroundCanvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        document.body.prepend(canvas);
        
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        function drawGradient(time) {
            // Create gradient animation
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            
            // Shift colors based on time
            const hue1 = (time / 100) % 360;
            const hue2 = (hue1 + 60) % 360;
            const hue3 = (hue1 + 180) % 360;
            
            gradient.addColorStop(0, `hsla(${hue1}, 5%, 10%, 1)`);
            gradient.addColorStop(0.5, `hsla(${hue2}, 5%, 15%, 1)`);
            gradient.addColorStop(1, `hsla(${hue3}, 5%, 10%, 1)`);
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            
            requestAnimationFrame(drawGradient);
        }
        
        requestAnimationFrame(drawGradient);
    }
    
    function enableNetworkBackground() {
        // Remove pattern background
        if (backgroundPattern) {
            backgroundPattern.remove();
            backgroundPattern = null;
        }
        
        // Load network script
        if (!document.querySelector('script[src="assets/js/canvas-background.js"]')) {
            const script = document.createElement('script');
            script.src = 'assets/js/canvas-background.js';
            document.body.appendChild(script);
        } else {
            // If script exists but canvas doesn't, recreate it
            if (!canvas) {
                // Script will handle canvas creation
                const script = document.createElement('script');
                script.src = 'assets/js/canvas-background.js';
                document.body.appendChild(script);
            }
        }
    }
    
    // Start with pattern background (option 1)
    enablePatternBackground();
});
