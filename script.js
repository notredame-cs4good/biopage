const memberGrid = document.querySelector("#member-grid");
const statusMessage = document.querySelector("#status-message");

// Start loading members as soon as the script runs.
loadMembers();

async function loadMembers() {
  try {
    showStatus("Loading members...");

    // members.json is the directory for the wall. It lists each member file.
    const memberPaths = await fetchJson("members.json");

    if (!Array.isArray(memberPaths)) {
      throw new Error("members.json should be an array of file paths.");
    }

    // Fetch every member file listed in members.json.
    const members = await Promise.all(
      memberPaths.map((path) => fetchJson(path))
    );

    // Sorting makes the wall stable even when people add files in any order.
    members.sort((a, b) => a.name.localeCompare(b.name));

    renderMembers(members);
  } catch (error) {
    showError(error);
  }
}

async function fetchJson(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Could not load ${path}.`);
  }

  return response.json();
}

function renderMembers(members) {
  memberGrid.innerHTML = "";

  if (members.length === 0) {
    showStatus("No members have been added yet.");
    return;
  }

  clearStatus();

  members.forEach((member) => {
    const card = document.createElement("article");
    card.className = "member-card";

    if (member.image) {
      const image = document.createElement("img");
      image.className = "member-image";
      image.src = member.image;
      image.alt = member.imageAlt || `${member.name} profile image`;
      image.loading = "lazy";
      card.appendChild(image);
    }

    const name = document.createElement("h3");
    name.textContent = member.name;

    const meta = document.createElement("p");
    meta.className = "member-meta";
    meta.textContent = `${member.year} - ${member.major}`;

    const tagList = document.createElement("div");
    tagList.className = "tag-list";
    tagList.setAttribute("aria-label", `${member.name}'s interests`);

    // Each interest becomes a small visual tag on the card.
    member.interests.forEach((interest) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = interest;
      tagList.appendChild(tag);
    });

    const bio = document.createElement("p");
    bio.className = "member-bio";
    bio.textContent = member.bio;

    card.append(name, meta, tagList, bio);
    memberGrid.appendChild(card);
  });
}

function showStatus(message) {
  statusMessage.className = "status-message";
  statusMessage.textContent = message;
}

function clearStatus() {
  statusMessage.className = "status-message";
  statusMessage.textContent = "";
}

function showError(error) {
  console.error(error);

  statusMessage.className = "status-message error";
  statusMessage.textContent =
    "We could not load the member files. If you opened index.html directly, try running python3 -m http.server 8000 and visiting http://localhost:8000.";
}
