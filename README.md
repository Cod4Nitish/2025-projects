<div align="center">
  <h1>2025 Project Shelf</h1>
  <p>An early static-portfolio snapshot retained for learning history</p>
  <img src="https://img.shields.io/badge/status-archived-6B7280?style=flat-square" alt="Status: archived" />
  <img src="https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JavaScript-F59E0B?style=flat-square" alt="HTML CSS JavaScript" />
</div>

> [!NOTE]
> **Archived project shelf.** This was an early home for 2025 experiments. It is retained for history and is not an active portfolio repository.

## Contents

- `portfolio/` — an early static portfolio experiment built with HTML, CSS, and JavaScript.

## What to explore

Open `portfolio/index.html` in a browser to review the preserved early static-site structure. The folder is intentionally left untouched as a reference point for the progression to the current portfolio.

## Current status

This repository is a historical snapshot, not a deployment target. It is retained to show learning progress without competing with the main work.

For current work, visit the active [portfolio repository](https://github.com/Cod4Nitish/portfolio).

## Page architecture

~~~mermaid
flowchart LR
    A[index.html] --> B[Hero and navigation]
    A --> C[About and skills]
    A --> D[Project cards]
    A --> E[Contact form]
    F[style.css] --> A
    G[main.js] --> H[Mobile-menu toggle]
    G --> I[Contact-form success alert]
~~~

## What the source actually contains

| Area | Detail |
| --- | --- |
| Sections | Hero, About, Skills, Projects, and Contact are all defined in portfolio/index.html. |
| Project cards | The static page lists Real-Time Chat App, Helmet Detection AI, and AI Career Advisor as display cards; their buttons are placeholder # links, not working product links. |
| Interaction | main.js toggles the mobile navigation and prevents the contact form from submitting before showing a browser alert. |
| Run locally | Open portfolio/index.html in a browser; there is no build step. |

The repository is an early static-site snapshot rather than evidence that the listed product cards were built here.
