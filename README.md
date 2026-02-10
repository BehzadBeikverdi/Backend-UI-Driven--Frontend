# 🛠 Backend‑UI‑Driven

A **Backend‑Driven UI** proof-of-concept/full architecture starter where UI structure and behavior can be controlled from your backend.  
This repository currently contains a basic **React + TypeScript + Vite** starter template — an ideal foundation for building a frontend that dynamically renders UI delivered from a Spring Boot backend (or any other backend).

Backend‑Driven UI (BDUI) is an architectural approach where the *server* not only provides data, but also defines *how the interface should be constructed and behave*. The frontend acts as a dynamic renderer, interpreting JSON or configuration sent from the backend to build screens at runtime. This allows UI changes without redeploying the frontend.

---

## 🧠 Why Backend‑Driven UI?

With Backend‑Driven UI you can:

- **Update UI without redeploying frontend clients** — ideal for experiments, A/B tests, or CMS-like features.
- Support multiple platforms (web, mobile) with the same backend definitions.
- Reduce coupling between backend logic and static UI code.

---

## 🚀 Features (Planned / Ideal)

💡 *Note: The current repo is a starter template — these are goals for your Backend‑Driven UI system.*

- ✔️ **React + TypeScript + Vite** starter
- ✔️ Dynamic screen rendering from JSON schema
- ✔️ Backend API integration for UI configuration
- ✔️ Component mapping & renderer layer
- ✔️ Sample form, list, and navigation definitions
- ✔️ Hooks for data + UI control

---

## 📁 Project Structure

```
├── public/
│ └── index.html
├── src/
│ ├── App.tsx
│ └── main.tsx
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

This is the base for a React application. You’ll extend `src/` with logic that takes backend UI definitions (e.g., JSON) and turns them into React components.

---

## 🧱 Tech Stack

| Purpose           | Technology                   |
|------------------|------------------------------|
| Frontend Framework | React                        |
| Language           | TypeScript                  |
| Bundler            | Vite                        |
| UI Rendering       | Dynamic JSON-to-component system |
| Backend (suggested) | Spring Boot or REST API      |

---

## 🛠 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/BehzadBeikverdi/Backend--UI-Driven.git
cd Backend--UI-Driven
