document.addEventListener("DOMContentLoaded", () => {    
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");

    const comingsoonButton = document.querySelector(".comingsoonButton");

    const emailcontactButton = document.querySelector(".emailcontactButton");
      
    const overlay1 = document.getElementById("overlay1");
    const overlay2 = document.getElementById("overlay2");
    const overlay3 = document.getElementById("overlay3");
    const overlay4 = document.getElementById("overlay4");
    const contactoverlay = document.getElementById("contactoverlay");

    const closeButton1 = document.getElementById("closeButton1");
    const closeButton2 = document.getElementById("closeButton2");
    const closeButton3 = document.getElementById("closeButton3");
    const closeButton4 = document.getElementById("closeButton4");
    const closeButtonContact = document.getElementById("closeButtonContact");
    const overlaybackground = document.getElementById("overlaybackground");
      
    overlay1.style.display = 'none';
    overlay2.style.display = 'none';
    overlay3.style.display = 'none';
    overlay4.style.display = 'none';
    contactoverlay.style.display = 'none';
    overlaybackground.style.display = 'none';
      
    if (button1) {
      button1.onclick = () => {
        overlay1.style.display = 'block';
        overlaybackground.style.display = 'block';
      };
    }

    if (button2) { 
      button2.onclick = () => {
        overlay2.style.display = 'block';
        overlaybackground.style.display = 'block';
      };
    }

    if (button3) {
      button3.onclick = () => {
        overlay3.style.display = 'block';
        overlaybackground.style.display = 'block';
      };
    }

    if (button4) {
      button4.onclick = () => {
        overlay4.style.display = 'block';
        overlaybackground.style.display = 'block';
      };
    }

    if (comingsoonButton) {
      comingsoonButton.onclick = () => {
        contactoverlay.style.display = 'block';
        overlaybackground.style.display = 'block';
      };
    }

    if (emailcontactButton) {
      emailcontactButton.onclick = () => {
        window.open("mailto:freytagco@gmail.com", "_blank");
      }
    }
      
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

      closeButtonContact.onclick = () => {
        contactoverlay.style.display = 'none';
        overlaybackground.style.display = 'none';
      };
    });

    function copyText() {
        const text = "freytagco@gmail.com";
        navigator.clipboard.writeText(text).then(() => {
            const popup = document.getElementById("emailpopup");
            popup.classList.add("show");
            setTimeout(() => {
                popup.classList.remove("show");
            }, 2000); // Hide after 2 seconds
        }).catch(err => {
            console.error('Failed to copy text: ', err);
      });
      }