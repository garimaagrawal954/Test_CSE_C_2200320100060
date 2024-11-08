
async function fetchProfiles() {
    const profileList = document.getElementById("profileList");
  
    try {
      const response = await fetch("https://api.github.com/search/users?q=followers:%3E1000&per_page=10");
      const data = await response.json();
  
      displayProfiles(data.items);
    } catch (error) {
      profileList.innerHTML = "Error loading profiles.";
    }
  }
  
  function displayProfiles(profiles) {
    const profileList = document.getElementById("profileList");
    profileList.innerHTML = profiles.map(profile => `
      <li>
        <a href="${profile.html_url}" target="_blank">${profile.login}</a>
      </li>
    `).join("");
  }
  function sortProfiles() {
    const profileList = document.getElementById("profileList");
    const profiles = Array.from(profileList.getElementsByTagName("li"));
  
    profiles.sort((a, b) => a.textContent.localeCompare(b.textContent));
    profileList.innerHTML = "";
    profiles.forEach(profile => profileList.appendChild(profile));
  }
  
  document.getElementById("sortButton").addEventListener("click", sortProfiles);
  
  fetchProfiles();
