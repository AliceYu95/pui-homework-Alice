// Make sure the description stays on the page even when the user scroll
window.onscroll = function() {
  var description = document.querySelector('.project-description');
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  description.style.transform = 'translateY(' + scrolled + 'px)';
};

// Change description accordingly when user hover on project image
document.addEventListener("DOMContentLoaded", function() {
  // Define project info
  const projectInfo = {
    project2: {
      title: "MoodMate",
      description: "Use wearable technology and a virtual guidance platform to detect negative emotions and to foster understanding and communication between children during disputes."
    },
    project4: {
      title: "Weaving Through Walls",
      description: "11000 square ft culinary institute located in Frick Park in Pittsburgh for Chef Niki Nakayama. The main concept is to break boundaries by blending architecture with landscape."
    },
    project1: {
      title: "TireRevive",
      description: "Service design that aims to address the problem of illegal tire dumping, while promoting land remediation efforts and raising awareness."
    },
    project3: {
      title: "LinkUp",
      description: "Linkup is an add-on feature to Bumble that provides personalized recommendations for dating places, easing the transition from online to offline and engaging users in real life."
    },
    project5: {
      title: "Claw",
      description: "This project explores computational representations as structured artifacts. Use basic curved geometric figures derived from a cone to design an architectural structure."
    }
  };

  // Original project description and title
  const originalTitle = "My Projects";
  const originalDescription = "These are my user experience projects and my architecture projects from 2022 to 2024." +
   "These projects showcase my ability to do multiple areas of design";

  // Function to update the description
  function updateDescription(projectId) {
    const projectTitle = document.querySelector(".project-description h2");
    const projectParagraphs = document.querySelectorAll(".project-description p");

    // Set the new title and description
    projectTitle.textContent = projectInfo[projectId].title;
    projectParagraphs[0].textContent = projectInfo[projectId].description;

  }

  // Function to reset the description
  function resetDescription() {
    const projectTitle = document.querySelector(".project-description h2");
    const projectParagraphs = document.querySelectorAll(".project-description p");

    // reset to original title and description
    projectTitle.textContent = originalTitle;
    projectParagraphs[0].textContent = originalDescription;
  }

  // Add event listeners to each project tile
  document.querySelectorAll(".project-tile").forEach(tile => {
    tile.addEventListener("mouseenter", function() {
      updateDescription(this.getAttribute("data-project-id"));
    });
    tile.addEventListener("mouseleave", resetDescription);
  });
});