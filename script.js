function launchConfetti() {
    const duration = 4 * 1000; // Duration of the confetti in milliseconds
    const end = Date.now() + duration;
     // Custom renderer for line shapes

    // Colors for confetti
    const colors = ['#ffd152', '#c252ff', '#ff6c52', '#0be3cd'];

    (function frame() {
      // Generate confetti with shapes and colors
      confetti({
        particleCount: 7,
        angle: 90,
        spread: 400,
        origin: { x: 0.5 },
        colors: colors,
        shapes: ['line']/* Slight transparency */ // Shapes for the confetti // Line dimensions
      });

      confetti({
        particleCount: 7,
        angle: 90,
        spread: 400,
        origin: { x: 0.5 },
        colors: colors,
        shapes: ['line'], // Shapes for the confetti // Line dimensions
      });

      // Continue until the duration ends
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  
  document.addEventListener("DOMContentLoaded", launchConfetti);