# Ben Pryke - Personal Website

This project contains the source for my personal website bootstrapped with [Create React App](https://github.com/facebook/create-react-app), hosted on [GitHub Pages](https://pages.github.com/), and available at [benpryke.com](https://benpryke.com).

## Deployment configuration

Deployment is handled automatically by GitHub actions on push to `master`. The workflow relies on a GitHub secret named `DEPLOY_TOKEN`, which is a personal access token scoped to the `benpryke/benpryke.github.io` repo. This token is used to authenticate with GitHub Pages and push the built site to the `gh-pages` branch.

This token will periodically expire. To update it in the ["Repository secrets" section of the repo settings](https://github.com/benpryke/personal-website/settings/secrets/actions), [generate](https://github.com/settings/tokens?type=beta) a new [access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) scoped to `benpryke/benpryke.github.io` with the following permissions:

- Read and write access to Contents.
- Read only access to Metadata.
- Read and write access to Pages.
