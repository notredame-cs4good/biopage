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

By the end, your card will show up on the member wall. Scroll down on the website to see an example member card.

If you are less familiar with Git and GitHub, our incredible Project Coordinator Joey Salatino put together this doc: https://docs.google.com/document/d/1ApBC1iMaxuCOyqeUY_7LNmfz7u80YzHpO3MiB-Jmw2Q/edit?usp=sharing

New to GitHub? Use Option 1. Already comfortable with Git? Use Option 2.

Before you start, create a GitHub account if you do not already have one. Then send your GitHub username in the `github-username-drop` channel so we can give you access to the repo. If you do not have access to the Discord, email kbach@nd.edu.

Use this profile format:

```json
{
  "name": "Example Member",
  "year": "Freshman",
  "major": "Computer Science",
  "image": "assets/stickfigureguy.jpg",
  "imageAlt": "Example Member profile image",
  "interests": ["web development", "design", "social impact"],
  "bio": "I joined CS4Good because I want to build useful tools for real community partners."
}
```

The `image` and `imageAlt` fields are optional. If you add an image, commit the image file with your JSON file and use a relative path like `assets/jane-doe.jpg`.

### Option 1: Edit on GitHub.com

Best for the first meeting or anyone who does not have Git set up locally.

1. Sign in to GitHub and open this repository.
2. Open `members/example-member.json`.
3. Copy the full contents of that file.
4. Go back to the `members` folder.
5. Use Add file > Create new file.
6. Name the file with your name, like `members/jane-doe.json`.
7. Paste the copied example into the new file.
8. Replace the example values with your own information.
9. Optional: upload a square or landscape profile image to the `assets/` folder.
10. If you added an image, put the image path in your JSON, like `assets/jane-doe.jpg`.
11. Open `members.json`.
12. Add your new file path to the list. This registers your profile file so the website knows to display it.

Example `members.json`:

```json
[
  "members/example-member.json",
  "members/jane-doe.json"
]
```

Make sure every line except the last one ends with a comma.

13. When GitHub asks how to save your changes, choose to create a new branch.
14. Open a pull request from that branch.
15. After the pull request is approved and merged, GitHub Pages will update the website.
16. Scroll down to the member cards and confirm your profile appears.

### Option 2: Clone the repo locally

Best for people who already have Git set up or want the normal developer workflow.

1. Sign in to GitHub and open this repository.
2. Click Code and copy the repo URL.
3. Clone the repo on your computer:

```bash
git clone REPO_URL_HERE
cd REPO_FOLDER_HERE
```

4. Create a new branch for your profile:

```bash
git checkout -b add-your-name
```

5. Copy `members/example-member.json` to a new file named with your name, like `members/jane-doe.json`.
6. Replace the example values with your own information.
7. Optional: add a square or landscape profile image to the `assets/` folder.
8. If you added an image, put the image path in your JSON, like `assets/jane-doe.jpg`.
9. Open `members.json`.
10. Add your new file path to the list. This registers your profile file so the website knows to display it.

Example:

```json
[
  "members/example-member.json",
  "members/jane-doe.json"
]
```

Make sure every line except the last one ends with a comma.

11. Commit and push your branch:

```bash
git add .
git commit -m "Add Jane Doe profile"
git push -u origin add-your-name
```

12. Open GitHub. It should show a button to create a pull request from your branch.
13. Open the pull request for review.
14. After the pull request is approved and merged, GitHub Pages will update the website.
15. Scroll down to the member cards and confirm your profile appears.

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
