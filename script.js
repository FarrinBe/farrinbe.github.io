// Function to animate timeline items on scroll
function animateTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
      if (isElementInViewport(item)) {
          item.classList.add("animate");
      } else {
          item.classList.remove("animate"); // Remove animation when not in viewport
      }
  });
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Add a scroll event listener to trigger the animation
window.addEventListener("scroll", animateTimeline);

// Trigger the animation when the page loads
animateTimeline();

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const links = document.querySelectorAll(".vertical-menu a");

  if (scrollY > 20) {
      links.forEach(link => {
          link.classList.add("scrolled-link");
      });
  } else {
      links.forEach(link => {
          link.classList.remove("scrolled-link");
      });
  }
});

window.addEventListener("scroll", function () {
   const menu = document.querySelector(".vertical-menu");
   if (window.scrollY > 20) {
       menu.classList.add("bordered");
   } else {
       menu.classList.remove("bordered");
   }
});


// Function to change header background, text color, and logo image on scroll
function handleHeaderBackground() {
   const header = document.getElementById("top");
   const menu = document.getElementById("menu");
   const h1 = document.querySelector("#top h1");
   const h2 = document.querySelector("#top h2");
   const logo = document.getElementById("logo");
   const scrollY = window.scrollY;

   if (scrollY > 20) {
       header.style.backgroundColor = "#000";
       h1.style.color = "#fff";
       h2.style.color = "#fff";
       logo.src = "angel-logo-white.png"; // Set the path to your second logo image
       logo.style.opacity = 0.7; // Adjust the opacity as needed
   } else {
       header.style.backgroundColor = "#fff";
       h1.style.color = "#000";
       h2.style.color = "#000";
       logo.src = "angel-logo-black.png"; // Set the path to your first logo image
       logo.style.opacity = 1;
   }
}

// Add a scroll event listener to trigger the function
window.addEventListener("scroll", handleHeaderBackground);

  // Function to show/hide the "scroll to top" button
  function toggleScrollToTopButton() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("scrollToTopButton").style.display = "block";
      } else {
          document.getElementById("scrollToTopButton").style.display = "none";
      }
  }

  // Function to scroll to the top
  function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  // Add a scroll event listener to toggle the button
  window.onscroll = function() {
      toggleScrollToTopButton();
  }

  // Add an event listener to the button to scroll to the top
  document.getElementById("scrollToTopButton").addEventListener("click", scrollToTop);

  particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },

  background: {
      color: "#000000", // Set the background color to black (#000000)
    },

  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

let indicatorVisible = true; // Add this variable to track the visibility of the indicator

window.addEventListener("scroll", function () {
    const indicator = document.querySelector(".scroll-down-indicator");

    if (window.scrollY === 0) {
        // If the user has scrolled to the top, show the indicator
        if (!indicatorVisible) {
            indicator.style.opacity = 1;
            indicator.style.animation = "fadeIn 2s forwards"; // Add a fade-in animation
            indicatorVisible = true;
        }
    } else {
        if (indicatorVisible) {
            // If the user has scrolled down and the indicator is still visible, hide it
            indicator.style.opacity = 0;
            indicator.style.animation = "fadeOut 2s forwards"; // Add a fade-out animation
            indicatorVisible = false;
        }
    }
});

// Function to handle the end of the fade-in animation
function handleFadeInEnd() {
    if (indicatorVisible) {
        const indicator = document.querySelector(".scroll-down-indicator");
        indicator.style.animation = ""; // Clear the animation to prevent fade-out when at the top
    }
}

// Add an event listener to handle the end of the fade-in animation
document.querySelector(".scroll-down-indicator").addEventListener("animationend", handleFadeInEnd);
