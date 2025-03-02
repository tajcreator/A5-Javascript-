document.addEventListener("click", () => {
    const body = document.body;
    const themeColors = [
      "aliceblue",
      "antiquewhite",
      "azure",
      "bisque",
      "ghostwhite",
      "lavender",
      "honeydew",
      "lightcyan",
      "paleturquoise",
      "palegreen",
    ];
  
    document.getElementById("theme-btn").addEventListener("click", () => {
      let chosenColor = themeColors[Math.floor(Math.random() * themeColors.length)];
      body.style.backgroundColor = chosenColor;
    });
  });


  