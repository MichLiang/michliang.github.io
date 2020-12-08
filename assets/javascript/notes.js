function addClickListeners(acc) {
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
    
            /* Toggle between hiding and showing the active panel */
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
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
