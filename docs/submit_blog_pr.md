# Submit Blog PR

Now, it's easy to submit your blog/articles and it's just a PR away!

Simply follow the below steps to create a PR by adding Markdown files (or folders) to the ./website/blog directory!

### Steps
1. Fork the harness-community.github.io repository through the GitHub web interface.

2. Clone the forked repository from your profile to your local setup.

```bash
git clone https://github.com/GITUSER_NAME/harness-community.github.io.git
```

3. If you prefer to use the SSH protocol:

```bash
git clone git@github.com:GITUSER_NAME/harness-community.github.io.git
```

4. Change the directory to your new cloned repository.

```bash
cd harness-community.github.io
```

5. Confirm you are on the `main` branch and check the remote by running the below command:

```bash
git branch
```
```bash
git remote -v
```

6. Add the `upstream` repository where you forked from.

```bash
git remote add upstream https://github.com/harness-community/harness-community.github.io.git
```

This also allows you to sync changes made in the original repository with the fork.

7. Update your local default branch:

```bash
git fetch upstream
git rebase upstream/main
```

8. Create a new branch for your changes:

```bash
git checkout -b BRANCH_NAME
```

> _Note:_ If you're planning to submit more than one blog, then create a PR for each one of them.

9. Change to the `blog` directory and create a blog directory with the format YYYY-MM-DD-NAME (eg: 2022-10-01-drone):

```bash
cd website/blog
mkdir YYYY-MM-DD-NAME 
```
This date is considered a blog published date and is displayed on the blog page. `NAME` can match the project/category of your blog.

10. Create a markdown file and add the blog contents in markdown format:

If you're writing a blog on "Getting started with Drone" then name the file `getting_started_drone.md`
```bash
touch getting_started_drone.md 
```
Use `vim`, `VSCode`, or any preferred editor to add content to this file.

11. A blog post folder can be convenient to co-locate blog post images and can be referenced in the blog md file like below:

```
![Harness Community](./harnesser.png)
```

12. Final directory structure will look like this:
```
├── 2022-10-01-drone
│   ├── harnesser.png
│   └── index.md
```

13. Additionally, you can directly embed Youtube videos in your blog post. Refer to this [article](https://support.google.com/youtube/answer/171780?hl=en) to get the embed URL of a video and replace it with `YOUTUBE_EMBED_URL` below:

```
<div className="iframe-wrapper">
<iframe
    src="YOUTUBE_EMBED_URL"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>
```

### Submit a PR

1. Commit your changes with an informative but short commit message:

```bash
git add /path/to/changed/fileORfolder
$ git commit -m "New Blog on Getting Started with Drone"
```

2. Push the local development branch to the origin (your fork):
```bash
git push -u origin BRANCH_NAME
```

3. In a browser, navigate to your forked repo and then click `Compare & Pull Request`. 
- Choose `compare across forks` under the `Compare changes` title. 
- Choose your repository and the new branch you pushed in the right drop-down list. - Confirm the branch name and changes.
- Edit the pull request template with all the necessary information about your blog.

4. Wait for reviews. You can also ask for reviews in the Slack [#community](https://harnesscommunity.slack.com/archives/C044SFFSXJB) channel.

5. After review and if the pull request looks good to the community, committers will merge it.

