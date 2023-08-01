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

To build the site, I recommend using `yarn berry`, which can be set up by running `yarn set version berry`. Then, run `yarn` to install the dependencies, and `yarn run build` to build the site. The output will be in the `output` folder. To run a development server, run `yarn run watch`, as this will rebuild if any changes are detected in src/**.

## License

This project is licensed under the MIT license. See the [License](LICENSE.md) file for more information.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. This is a personal site so I may not accept all changes, but I will try to be as open as possible. If you want to use this code for your own site, feel free to fork it and modify it to your liking. Additionally, a boilerplate version of this site is available [here](https://github.com/lilykiwi/rollup-template), which you can use as a starting point for your own site using this same build process.