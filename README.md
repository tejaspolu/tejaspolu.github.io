# Personal Webpage - Tejas Polu

Access my webpage at [tejaspolu.github.io](https://tejaspolu.github.io)


## Features

- Simple and elegant personal homepage theme
- Jekyll theme, automatically deployed by GitHub Pages
- Basic search engine optimization
- Mobile friendly
- Supporting Markdown 
- Supporting dark mode

## Project Architecture

```
.
├── _blogs                                   # Directory for individual blog posts
|   └── lifesACircus.md                     # Markdown file for the "Life's a Circus" post
├── _data
|   └── publications.yml                    # YAML file for publications
├── _includes
|   ├── extracurriculars.md                 # Markdown file for extracurricular activities
|   └── publications.md                     # Markdown file for publications
├── _layouts
|   ├── blogs.html                          # HTML template for blog listing
|   ├── homepage.html                       # HTML template for the homepage
|   └── post.html                           # HTML template for individual posts
├── _sass
|   ├── minimal-light.scss                  # SCSS file for light mode styles
|   └── minimal-light-no-dark-mode.scss     # SCSS file with dark mode disabled
├── _site                                   # Directory for generated site files
├── assets                                  # Directory for assets (images, CSS, JS, etc.)
├── blogs.md                                # Markdown file for the blog index page
├── CNAME                                   # Custom domain file used by GitHub Pages
├── Gemfile                                 # RubyGems configuration file
├── Gemfile.lock                            # RubyGems lock file
├── LICENSE                                 # License file
├── README.md                               # Readme file (English)
├── _config.yml                             # Jekyll configuration file
└── index.md                                # Markdown file for the homepage content
```

## Setup Instructions

1. Fork this repository or create a new repository named `tejaspolu.github.io`
2. Customize the content in `_config.yml` and `index.md`
3. Add your profile picture to `assets/img/`
4. Update publications in `_data/publications.yml`
5. Push to GitHub and enable GitHub Pages

## Acknowledgements

This project uses the source code from the following repositories:

* [yaoyao-liu/minimal-light](https://github.com/yaoyao-liu/minimal-light)

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)

* [al-folio](https://github.com/alshedivat/al-folio)
