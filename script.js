async function loadHero() {
    try {
        // Fetch the external HTML file
        const response = await fetch('Pages/Hero/hero.html');
        
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
        const response = await fetch('Pages/About/about.html');
        
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
        const response = await fetch('Pages/Skills/skills.html');
        
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
        const response = await fetch('Pages/Projects/projects.html');
        
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
        const response = await fetch('Pages/Experience/experience.html');
        
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
    const response = await fetch('Pages/Contact/contact.html');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text();

    document.getElementById('contact').innerHTML = html
  } catch (error) {
    console.error('Error loading HTML:', error)
  }
}

loadHero();
loadAbout();
loadSkills();
loadProjects();
loadExperience();
loadContact();

