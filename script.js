  function showPage(pageName) {
    // Get the main content section
    var mainContent = document.getElementById("main-content");

    // Load the appropriate content based on the pageName parameter
    if (pageName === "home") {
      mainContent.innerHTML = "<h1>Welcome to my website!</h1><p>This is the homepage.</p>";
    } else if (pageName === "games") {
      mainContent.innerHTML = "<h1>About Me</h1><p>This is game page</p>";
    } else if (pageName === "animation") {
      mainContent.innerHTML = "<h1>Contact Me</h1><p>This is animation site</p>";
    } else if (pageName === "stories") {
      mainContent.innerHTML = "<h1>Contact Me</h1><p>This is stories site</p>";
    } else if (pageName === "social") {
      mainContent.innerHTML = "<h1>Contact Me</h1><p>This is social hub site</p>";
    }
  }
