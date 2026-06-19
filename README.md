# CS4Good Member Wall

A simple static member wall for a CS4Good onboarding demo. Members add themselves by creating a small JSON file and opening a GitHub pull request.

This project uses only plain HTML, CSS, and JavaScript. There is no framework, build step, or package install.

## Files

- `index.html` - the page structure
- `styles.css` - the visual design
- `script.js` - loads member files and renders cards
- `members.json` - lists every member JSON file
- `members/example-member.json` - starter file to copy
- `assets/` - logo images and optional member profile images

## Public Profile Notice

This site is publicly visible. Only add information and images you are comfortable sharing online. Do not include private contact details, student ID numbers, addresses, dorm/location details, or anything sensitive. By opening a pull request, you confirm that you have permission to share the content you added.

## Add Yourself

1. Fork this repo, or use GitHub's edit button if your club has given you access.
2. Open `members/example-member.json`.
3. Copy that file into the same `members` folder.
4. Rename the copied file using your name, like `members/jane-doe.json`.
5. Edit the copied file with your own information.
6. Optional: add a square or landscape profile image to `assets/`.

Use this format:

```json
{
  "name": "Example Member",
  "year": "Freshman",
  "major": "Computer Science",
  "image": "assets/nd-cs4good-monogram.png",
  "imageAlt": "Example Member profile image",
  "interests": ["web development", "design", "social impact"],
  "bio": "I joined CS4Good because I want to build useful tools for real community partners."
}
```

The `image` and `imageAlt` fields are optional. If you add an image, commit the image file with your JSON file and use a relative path like `assets/jane-doe.jpg`.

7. Open `members.json`.
8. Add your new file path to the list.

Example:

```json
[
  "members/example-member.json",
  "members/jane-doe.json"
]
```

Make sure every line except the last one ends with a comma.

9. Preview the site locally and make sure your card looks right.
10. Commit your changes.
11. Open a pull request.
12. After your pull request is merged, your card will appear on the member wall.

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

For GitHub Pages:

1. Make the GitHub repo public.
2. Go to the repo's Settings > Pages.
3. Under Build and deployment, choose Deploy from a branch.
4. Select the `main` branch and the `/root` folder.
5. Save. GitHub will publish the site at a `github.io` URL after the first Pages build finishes.

For Cloudflare Pages:

1. Connect the GitHub repo.
2. Use no framework preset.
3. If Cloudflare asks for a build command, use `exit 0`.
4. Set the build output directory to this folder. If this folder is the repo root, use `.`.
5. Make sure `index.html`, `members.json`, `members/`, and `assets/` are all committed.

Because this project has a top-level `index.html`, Cloudflare Pages can serve it as the homepage.
