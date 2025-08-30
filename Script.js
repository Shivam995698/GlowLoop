 
    let intervalId;
    
    function randomColor() {
      let hex = '#';
      const chars = '0123456789ABCDEF';
      for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
      }
      return hex;
    }

    const colorBox = document.getElementById("colorBox");
    const tooltip = document.getElementById("tooltip");

    document.getElementById("start").addEventListener("click", () => {
      if (!intervalId) {
        intervalId = setInterval(() => {
          const newColor = randomColor();
          document.body.style.backgroundColor = newColor;
          colorBox.textContent = newColor;
        }, 1000);
      }
    });

    document.getElementById("stop").addEventListener("click", () => {
      clearInterval(intervalId);
      intervalId = null;
    });

    // Copy color on click
    colorBox.addEventListener("click", () => {
      navigator.clipboard.writeText(colorBox.textContent).then(() => {
        tooltip.classList.add("show");
        setTimeout(() => tooltip.classList.remove("show"), 1000);
      });
    });
 