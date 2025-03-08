document.addEventListener("DOMContentLoaded", function () {
    const msg1 = document.getElementById("msg1");
    const msg2 = document.getElementById("msg2");
    const msg3 = document.getElementById("msg3");
    const msg4 = document.getElementById("msg4");
    const msg5 = document.getElementById("msg5");
    const msg6 = document.getElementById("msg6");
    const msg7 = document.getElementById("msg7");
    const msg8 = document.getElementById("msg8");
    const msg9 = document.getElementById("msg9");
    const msg10 = document.getElementById("msg10");
    const bulb = document.getElementById("bulb");
    const clickMsg = document.getElementById("click-msg");
    const fullscreenImage = document.getElementById("fullscreen-image");
    const hallwayImage = document.getElementById("hallway-image");
    const door = document.getElementById("door");
    const clickDoorMsg = document.getElementById("click-door-msg");
    const hallwayDoor = document.getElementById("hallway-door");
    const clickHallwayDoorMsg = document.getElementById("click-hallway-door-msg");
    const msg11 = document.getElementById("msg11");
    const msg12 = document.getElementById("msg12");
    const msg13 = document.getElementById("msg13");
    const gift = document.getElementById("gift");
    const clickGiftMsg = document.getElementById("click-gift-msg");
    const bedfullscreenImage = document.getElementById("bed-fullscreen-image");

    // Audio elements
    const backgroundMusic = document.getElementById("background-music");
    const bulbClickSound = document.getElementById("bulb-click-sound");
    const doorOpenSound = document.getElementById("door-open-sound");

    // Function to show an element
    function show(element) {
        element.style.opacity = 1;
    }

    // Function to hide an element
    function hide(element) {
        element.style.opacity = 0;
    }

    // Sequence of events
    setTimeout(() => {
        show(msg1); // Show "Hey!"
    }, 0);

    setTimeout(() => {
        hide(msg1); // Hide "Hey!"
        show(msg2); // Show "Why is it so dark here?"
    }, 2500); // After 2.5 seconds

    setTimeout(() => {
        hide(msg2); // Hide "Why is it so dark here?"
        show(msg3); // Show "Kapil! Can you please switch on the lights?"
    }, 5000); // After 5 seconds

    setTimeout(() => {
        hide(msg3); // Hide "Kapil! Can you please switch on the lights?"
        show(bulb); // Show the bulb
        show(clickMsg); // Show "Click the Light Bulb."

        // Add pulsation animation to the bulb after it appears
        bulb.classList.add("pulsate");
    }, 8000); // After 8 seconds

    // Add event listener to the bulb
    bulb.addEventListener("click", function () {
        bulbClickSound.volume = 1; // Bulb click sound ka volume increase karein
        bulbClickSound.play(); // Bulb click sound play karein

        // Stop the pulsation animation
        bulb.style.animation = "none";

        // Shrink the bulb completely
        bulb.style.transform = "translateX(-50%) scale(0)";
        bulb.style.transition = "transform 0.5s ease-in-out";

        // Hide all elements
        setTimeout(() => {
            hide(msg1);
            hide(msg2);
            hide(msg3);
            hide(bulb);
            hide(clickMsg);

            // Show the full-screen bedroom image
            fullscreenImage.style.display = "flex";

            // Gradually increase opacity from 0 to 1 (fade-in effect)
            setTimeout(() => {
                fullscreenImage.style.opacity = 0.8; // Increase opacity to 80%
            }, 100); // Small delay to ensure display: flex is applied

            // Start the new message sequence
            setTimeout(() => {
                show(msg4); // Show "Ok! Why is it so empty here?"
            }, 3500); // After 3.5 seconds

            setTimeout(() => {
                hide(msg4); // Hide "Ok! Why is it so empty here?"
                show(msg5); // Show "You know what, let's move outside."
            }, 6000); // After 6 seconds

            setTimeout(() => {
                hide(msg5); // Hide "You know what, let's move outside."
                show(msg6); // Show "Let's see if anyone's over there..."
                show(door); // Show the door
                show(clickDoorMsg); // Show "Click the Door."
            }, 9000); // After 9 seconds

            setTimeout(() => {
                hide(msg6); // Hide "Let's see if anyone's over there..."
            }, 12000); // After 12 seconds
        }, 500); // Wait for the shrink animation to complete (0.5s)
    });

    // Add event listener to the door
    door.addEventListener("click", function () {
        doorOpenSound.play(); // Door open sound play karein

        // Hide the bedroom image and its messages
        fullscreenImage.style.display = "none";
        hide(msg4);
        hide(msg5);
        hide(msg6);
        hide(door);
        hide(clickDoorMsg);

        // Show the hallway image
        hallwayImage.style.display = "flex";

        // Gradually increase opacity from 0 to 0.8 (fade-in effect)
        setTimeout(() => {
            hallwayImage.style.opacity = 0.8; // Increase opacity to 80%
        }, 100); // Small delay to ensure display: flex is applied

        // Start the hallway message sequence after 1 second
        setTimeout(() => {
            show(msg7); // Show "Hey!"
        }, 1000); // After 1 second

        setTimeout(() => {
            hide(msg7); // Hide "Hey!"
            show(msg8); // Show "Maybe it's a bit late to move in the hallway."
        }, 4000); // After 4 seconds

        setTimeout(() => {
            hide(msg8); // Hide "Maybe it's a bit late to move in the hallway."
            show(msg9); // Show "Things are creepy here..."
        }, 7000); // After 7 seconds

        setTimeout(() => {
            hide(msg9); // Hide "Things are creepy here..."
            show(msg10); // Show "I think we should go back inside."
        }, 10000); // After 10 seconds

        setTimeout(() => {
            hide(msg10); // Hide "I think we should go back inside."
            show(hallwayDoor); // Show the door
            show(clickHallwayDoorMsg); // Show "Click the Door."
        }, 13000); // After 13 seconds

        // Play background music when hallway image is shown
        backgroundMusic.volume = 1; // Volume set karein (optional)
        backgroundMusic.play(); // Background music play karein
    });

    // Add event listener to the hallway door
    hallwayDoor.addEventListener("click", function () {
        doorOpenSound.play(); // Play door open sound

        // Hide the hallway image and its messages
        hallwayImage.style.display = "none";
        hide(msg7);
        hide(msg8);
        hide(msg9);
        hide(msg10);
        hide(hallwayDoor);
        hide(clickHallwayDoorMsg);

        // Show the bedroom image again
        bedfullscreenImage.style.display = "flex";
        bedfullscreenImage.style.opacity = 0;

        // Gradually increase opacity from 0 to 0.8 (fade-in effect)
        setTimeout(() => {
            bedfullscreenImage.style.opacity = 0.8; // Increase opacity to 80%
        }, 100); // Small delay to ensure display: flex is applied

        // Start the new message sequence after 5 seconds
        setTimeout(() => {
            show(msg11); // Show "Wow! That was something weird."
        }, 5000); // After 5 seconds

        setTimeout(() => {
            hide(msg11); // Hide "Wow! That was something weird."
            show(msg12); // Show "Hey look! There's a gift for you.."
        }, 10000); // After 10 seconds

        setTimeout(() => {
            hide(msg12); // Hide "Hey look! There's a gift for you.."
            show(msg13); // Show "C'mon, let's open it and see what's in there!"
        }, 15000); // After 15 seconds

        setTimeout(() => {
            hide(msg13)
            show(gift); // Show the gift image
            show(clickGiftMsg); // Show "Click the gift."
        }, 20000); // After 20 seconds

        // Stop background music when going back to bedroom
        backgroundMusic.pause(); // Background music pause karein
    });

    // Add event listener to the gift box
    gift.addEventListener("click", function () {
        // Create a white overlay for the transition
        const whiteOverlay = document.createElement("div");
        whiteOverlay.style.position = "fixed";
        whiteOverlay.style.top = "0";
        whiteOverlay.style.left = "0";
        whiteOverlay.style.width = "100%";
        whiteOverlay.style.height = "100%";
        whiteOverlay.style.backgroundColor = "white";
        whiteOverlay.style.opacity = "1";
        whiteOverlay.style.transition = "opacity 1s ease";
        whiteOverlay.style.zIndex = "1000"; // Ensure it's on top of everything
        document.body.appendChild(whiteOverlay);

        // Fade in the white overlay
        setTimeout(() => {
            whiteOverlay.style.opacity = "1";
        }, 10); // Small delay to ensure the element is added to the DOM

        // Redirect to index1.html after the fade-in completes
        setTimeout(() => {
            window.location.href = "index1.html";
        }, 1000); // Wait for 1 second (duration of the fade-in)
    });
});