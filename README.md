<!-- PROJECT INFO -->
<p align="center">
  <!--
  <a href="https://github.com/lilykiwi/y1-csg-uni">
    <img src=".github/uni.png" alt="Logo" width="160" height="160">
  </a>
  -->

  <h2 align="center">lilykiwi.xyz</h2>

  <p align="center">
    <a href="https://lilykiwi.xyz/"><strong>View the live site »</strong></a>
  </p>
</p>
<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

This is the source code for my personal website, [lilykiwi.xyz](https://lilykiwi.xyz). It's written in TypeScript and SCSS, using Rollup to bundle the code and Preact to render it. It's currently a static site, although I plan on adding a backend in the future for things like a blog and contact form.

## Usage

This project uses [Yarn](https://yarnpkg.com/) for package management. It is required (I think?) to use yarn berry, which can be set up by running `yarn set version berry` or `yarn set version latest`. 

To get intellisense working in vscode, you should run: `yarn dlx @yarnpkg/sdks vscode`

This project includes `.pnp.cjs` and `.pnp.loader.mjs`, the alternative to `node_modules`, so you don't need to install with `yarn`, you can skip straight to:

- `yarn run watch` - watches src/** for changes and rebuilds on change. might be buggy (I'm working on it!!)
- `yarn run build` - builds the site to `output/`
- `yarn run doc`   - generates Markdown documentation in `docs/` using [TypeDoc](https://typedoc.org/)

## License

This project is licensed under the MIT license. See the [License](LICENSE.md) file for more information.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. This is a personal site so I may not accept all changes, but I will try to be as open as possible. If you want to use this code for your own site, feel free to fork it and modify it to your liking. Additionally, a boilerplate version of this site is available [here](https://github.com/lilykiwi/rollup-template), which you can use as a starting point for your own site using this same build process.
