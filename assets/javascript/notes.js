function addClickListeners(acc) {
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
    
            /* Toggle between hiding and showing the active panel */
            const panel = this.nextElementSibling;
            if (panel.style.visibility === "visible") {
                panel.style.visibility = "hidden";
                panel.style.opacity = "0";
                panel.style.height = "0";
                panel.style.padding = "0";
            } else {
                panel.style.visibility = "visible";
                panel.style.opacity = "1";
                panel.style.height = "600px";
                panel.style.padding = "0 18px";
            }
        });
    }
}

let acc;
// Poll the page every 500ms to check if accordion buttons are ready
function waitLoop() {
    setTimeout(() => {
        acc = document.getElementsByClassName("accordion");
        if (acc == null || acc.length === 0) {
            // If we still cannot find the accordions, run waitLoop again
            waitLoop();
        } else {
            addClickListeners(acc);
        }
    }, 500);
}

waitLoop();
