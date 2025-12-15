// Particle Background Animation System
// Adds animated diagonal lines and spline curves to the page

// Wait for GSAP to be loaded with timeout
let gsapLoadRetries = 0;
const MAX_RETRIES = 50; // 5 seconds max wait

function initParticleBackground() {
    if (typeof gsap === 'undefined') {
        if (gsapLoadRetries++ < MAX_RETRIES) {
            setTimeout(initParticleBackground, 100);
        } else {
            console.error('GSAP failed to load after', MAX_RETRIES * 100, 'ms');
        }
        return;
    }

    console.log('Initializing particle background...');

    // Configuration
    const config = {
        colors: {
            primary: 'rgba(59, 130, 246, 0.4)',
            primaryDark: 'rgba(59, 130, 246, 0.3)'
        },
        diagonalLines: {
            count: 5,
            opacity: 0.3,
            scaleX: 4.0,
            width: Math.max(1200, window.innerWidth * 1.5), // Responsive width
            duration: 4,
            rotationDuration: 8
        },
        splineCurves: {
            count: 4,
            opacity: 0.4,
            scale: 1.2,
            duration: 6,
            rotationDuration: 10
        }
    };

    // Create container for particles
    const container = document.createElement('div');
    container.className = 'morphing-shapes';
    container.style.cssText = 'position: fixed; inset: 0; pointer-events: none; overflow: hidden; z-index: 0;';
    document.body.insertBefore(container, document.body.firstChild);

    // Ensure body content stays above particles
    document.body.style.position = 'relative';

    // Utility: Random position generator
    const randomPosition = (min = 10, max = 90) => ({
        x: Math.random() * (max - min) + min,
        y: Math.random() * (max - min) + min
    });

    // Create and animate diagonal lines
    function createDiagonalLines() {
        const { count, opacity, scaleX, width, duration, rotationDuration } = config.diagonalLines;
        
        for (let i = 0; i < count; i++) {
            const line = document.createElement('div');
            const pos = randomPosition();
            
            line.style.cssText = `
                position: absolute;
                background: linear-gradient(45deg, transparent, ${config.colors.primary}, transparent);
                height: 3px;
                width: ${width}px;
                opacity: 0;
                z-index: 1;
                left: ${pos.x}%;
                top: ${pos.y}%;
                transform: rotate(${Math.random() * 360}deg);
                transform-origin: center center;
            `;
            line.className = 'diagonal-line';
            container.appendChild(line);

            // Animate
            gsap.timeline({ repeat: -1, yoyo: true })
                .to(line, { 
                    opacity: opacity, 
                    scaleX: scaleX, 
                    duration: duration, 
                    delay: i * 0.8, 
                    ease: "power2.inOut" 
                })
                .to(line, { 
                    rotation: '+=180', 
                    duration: rotationDuration, 
                    ease: "none" 
                }, 0);
        }
    }

    // Create and animate spline curves
    function createSplineCurves() {
        const { count, opacity, scale, duration, rotationDuration } = config.splineCurves;
        
        for (let i = 0; i < count; i++) {
            const curve = document.createElement('div');
            const pos = randomPosition();
            const size = 150 + Math.random() * 60;
            
            curve.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border: 3px solid ${config.colors.primaryDark};
                border-radius: 50%;
                opacity: 0;
                z-index: 1;
                left: ${pos.x}%;
                top: ${pos.y}%;
            `;
            curve.className = 'spline-curve';
            container.appendChild(curve);

            // Animate
            gsap.timeline({ repeat: -1, yoyo: true })
                .to(curve, { 
                    opacity: opacity, 
                    scale: scale, 
                    borderRadius: '0%', 
                    duration: duration, 
                    delay: i * 1.2, 
                    ease: "power2.inOut" 
                })
                .to(curve, { 
                    rotation: 360, 
                    duration: rotationDuration, 
                    ease: "none" 
                }, 0);
        }
    }

    // Initialize animations
    createDiagonalLines();
    createSplineCurves();

    console.log('Particle background initialized successfully!');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticleBackground);
} else {
    initParticleBackground();
}

// Pause animations when page is hidden for performance
document.addEventListener('visibilitychange', function() {
    if (typeof gsap !== 'undefined') {
        if (document.hidden) {
            gsap.globalTimeline.pause();
        } else {
            gsap.globalTimeline.resume();
        }
    }
});
