# ClarivateAssessment

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About

Clarivate assessment React project.
For this assignment, I opted to develop most components from scratch. In a real enterprise project, I would prefer leveraging libraries like React Material UI, Chakra, or Tailwind for UI development. However, for the purpose of this assessment, I deliberately chose to write the majority of the code from scratch to showcase my coding proficiency.

## Demo

[Live Demo](https://example.com)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/maklja/clarivate-assessment
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

### Development

To run application in development mode:

```bash
npm start
```

### Docker

Using docker compose:

```bash
docker compose up -d
```

or by building docker image and running it:

```bash
docker build -t clarivate-assessment .

docker run -p 3000:3000 clarivate-assessment
```

## Project structure

The application structure is built using [Nx monorepo](https://nx.dev/), which provides out-of-the-box configuration setup for most tools used in the project. Additionally, Nx offers various generators for creating different parts of the application. For instance, the [React generator](https://nx.dev/nx-api/react) facilitates the rapid and consistent creation of React components.

Directories

-   e2e/: Houses the source code for end-to-end tests.
-   src/: Contains the source code of the application.
    -   api/: Contains functions for making requests.
    -   app/: Houses application main component.
    -   assets/: Stores static assets such as images, fonts, or SVG files.
    -   components/: Houses reusable UI components used across the application.
    -   pages/: Includes the application's different pages.
    -   hooks/: Contains reusable React hooks.
    -   store/: This directory contains the Tanstack storage, which serves as the repository for application data.
    -   translations/: Houses language translations for the application.

## Running tests

Application has couple types of tests:

-   Component tests ensure that components render correctly and that all event callbacks are triggered properly. Technologies used for component tests include React Testing Library and Vitest.
-   End-to-end tests are implemented using Playwright and cover two scenarios. The first test verifies that selected favorite photos appear on the dashboard. The second test checks the behavior of infinite scroll loading on the photos page.

Execute components tests:

```bash
npm test
```

Execute end-to-end tests:

```bash
npx nx e2e --skip-nx-cache
```

**Note:** Ensure that the application is up and running on port 4200.
**Note:** Prior to executing end-to-end tests, verify that your platform is compatible. Refer to the Playwright system requirements available [here](https://playwright.dev/docs/intro#system-requirements).

## Running storybook

Storybook is used to develop components interactively, view the different states of each component, and ensure that your UI is consistent and reusable.

To run the story book execute:

```bash
npx nx storybook --skip-nx-cache
```

## Translation

To enable multi-language support, the [react-i18next](https://react.i18next.com/) library is utilized. Given the small scale of this project, translations are retained within the TypeScript file. However, for larger projects, it's advisable to centralize translations into JSON files.

## Responsive design

Minimal adjustments have been made to support responsive design, evident in the styles.scss file. For enterprise-level projects, employing frameworks like Tailwind or React Material UI is recommended for crafting a user-friendly, responsive UI.
