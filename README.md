# CS4Good Member Wall

A simple static member wall for a CS4Good onboarding demo. Members add themselves by creating a small JSON file and opening a GitHub pull request.

This project uses only plain HTML, CSS, and JavaScript. There is no framework, build step, or package install.

## Files

- `index.html` - the page structure
- `styles.css` - the visual design
- `script.js` - loads member files and renders cards
- `members.json` - lists every member JSON file
- `members/example-member.json` - starter file to copy
- `assets/` - logo images used at the top of the page

## Add Yourself

1. Fork this repo, or use GitHub's edit button if your club has given you access.
2. Open `members/example-member.json`.
3. Copy that file into the same `members` folder.
4. Rename the copied file using your name, like `members/jane-doe.json`.
5. Edit the copied file with your own information.

Use this format:

```json
{
  "name": "Example Member",
  "year": "Freshman",
  "major": "Computer Science",
  "interests": ["web development", "design", "social impact"],
  "bio": "I joined CS4Good because I want to build useful tools for real community partners."
}
```

6. Open `members.json`.
7. Add your new file path to the list.

Example:

```json
[
  "members/example-member.json",
  "members/jane-doe.json"
]
```

Make sure every line except the last one ends with a comma.

8. Commit your changes.
9. Open a pull request.
10. After your pull request is merged, your card will appear on the member wall.

## Run Locally

Because the site uses `fetch()` to load JSON files, some browsers block it when you open `index.html` directly from your computer.

If that happens, run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy

This site can be deployed on Cloudflare Pages, GitHub Pages, or any static hosting service.

For Cloudflare Pages:

1. Connect the GitHub repo.
2. Use no framework preset.
3. If Cloudflare asks for a build command, use `exit 0`.
4. Set the build output directory to this folder. If this folder is the repo root, use `.`.
5. Make sure `index.html`, `members.json`, `members/`, and `assets/` are all committed.

Because this project has a top-level `index.html`, Cloudflare Pages can serve it as the homepage.
