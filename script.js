document.addEventListener("DOMContentLoaded", () => {    
    const button1 = document.getElementById("button1");
      document.body.appendChild(button1);
      
      const button2 = document.getElementById("button2");
      document.body.appendChild(button2);

      const button3 = document.getElementById("button3");
      document.body.appendChild(button3);

      const button4 = document.getElementById("button4");
      document.body.appendChild(button4);
      
      const overlay1 = document.getElementById("overlay1");
      const overlay2 = document.getElementById("overlay2");
      const overlay3 = document.getElementById("overlay3");
      const overlay4 = document.getElementById("overlay4");
      
      const closeButton1 = document.getElementById("closeButton1");
      const closeButton2 = document.getElementById("closeButton2");
      const closeButton3 = document.getElementById("closeButton3");
      const closeButton4 = document.getElementById("closeButton4");
      
      overlay1.style.display = 'none';
      overlay2.style.display = 'none';
      overlay3.style.display = 'none';
      overlay4.style.display = 'none';
      overlaybackground.style.display = 'none';
      
      button1.onclick = () => {
        overlay1.style.display = 'block';
        overlaybackground.style.display = 'block';
      };

      button2.onclick = () => {
        overlay2.style.display = 'block';
        overlaybackground.style.display = 'block';
      };

      button3.onclick = () => {
        overlay3.style.display = 'block';
        overlaybackground.style.display = 'block';
      };

      button4.onclick = () => {
        overlay4.style.display = 'block';
        overlaybackground.style.display = 'block';
      };
      
      closeButton1.onclick = () => {
        overlay1.style.display = 'none';
        overlaybackground.style.display = 'none';
      };

      closeButton2.onclick = () => {
        overlay2.style.display = 'none';
        overlaybackground.style.display = 'none';
      };

      closeButton3.onclick = () => {
        overlay3.style.display = 'none';
        overlaybackground.style.display = 'none';
      };

      closeButton4.onclick = () => {
        overlay4.style.display = 'none';
        overlaybackground.style.display = 'none';
      };
    });