async function loadHero() {
    try {
        // Fetch the external HTML file
        const response = await fetch('Components/hero.html');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert response to text (HTML string)
        const html = await response.text();

        // Inject into a specific container
        document.getElementById('top').innerHTML = html;
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

async function loadAbout() {
    try {
        // Fetch the external HTML file
        const response = await fetch('Components/about.html');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert response to text (HTML string)
        const html = await response.text();

        // Inject into a specific container
        document.getElementById('about').innerHTML = html;
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

async function loadSkills() {
    try {
        // Fetch the external HTML file
        const response = await fetch('Components/skills.html');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert response to text (HTML string)
        const html = await response.text();

        // Inject into a specific container
        document.getElementById('skills').innerHTML = html;
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

async function loadProjects() {
    try {
        // Fetch the external HTML file
        const response = await fetch('Components/projects.html');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert response to text (HTML string)
        const html = await response.text();

        // Inject into a specific container
        document.getElementById('projects').innerHTML = html;
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

async function loadExperience() {
    try {
        // Fetch the external HTML file
        const response = await fetch('Components/experience.html');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert response to text (HTML string)
        const html = await response.text();

        // Inject into a specific container
        document.getElementById('experience').innerHTML = html;
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

async function loadContact() {
  try {
    const response = await fetch('Components/contact.html');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text();

    document.getElementById('contact').innerHTML = html
  } catch (error) {
    console.error('Error loading HTML:', error)
  }
}

// Bad code, they'll race each other in loading, some may finished first before the actual first one that's called gets loaded in
/*  loadHero();
    loadAbout();
    loadSkills();
    loadProjects();
    loadExperience();
    loadContact(); */
    
async function initPortfolio() {
    try {
        await Promise.all([
            loadHero(),
            loadAbout(),
            loadSkills(),
            loadProjects(),
            loadExperience(),
            loadContact()
        ]);
        
        console.log("All portfolio sections loaded successfully in order!");
        
        // 💡 OPTIONAL: If you need to run any JS on your portfolio elements 
        // (like a dark mode toggle or dynamic buttons), call that code HERE.
        
    } catch (error) {
        console.error("One or more sections failed to load:", error);
    }
}

initPortfolio();
