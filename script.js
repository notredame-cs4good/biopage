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

    // Fetch every member file listed in members.json. If one file path is wrong,
    // skip that card instead of breaking the whole wall.
    const memberResults = await Promise.allSettled(
      memberPaths.map((path) => fetchJson(path))
    );
    const members = memberResults
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);
    const failedCount = memberResults.length - members.length;

    // Sorting makes the wall stable even when people add files in any order.
    members.sort((a, b) => a.name.localeCompare(b.name));

    renderMembers(members, failedCount);
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

function renderMembers(members, failedCount = 0) {
  memberGrid.innerHTML = "";

  if (members.length === 0) {
    showStatus(
      failedCount > 0
        ? "No member cards loaded. Check that every path in members.json matches a real file."
        : "No members have been added yet."
    );
    return;
  }

  if (failedCount > 0) {
    showStatus(
      `${failedCount} member file could not be loaded. Check members.json for a missing or misspelled file path.`
    );
  } else {
    clearStatus();
  }

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
