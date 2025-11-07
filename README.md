<h1 align="center">RecipeVWR</h1>
<p align="center">
  Discover, organize, and share your favorite recipes with ease.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Bun-000000?logo=bun&logoColor=white"/>
  <img src="https://img.shields.io/badge/-SpringBoot-6DB33F?logo=springboot&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white"/>
</p>

## 📝 Description

RecipeVWR is a modern web application built with React and TypeScript, designed to help you discover, organize, and share your favorite recipes. While currently under development and focusing on robust testing, RecipeVWR aims to provide a seamless user experience with features for searching recipes, creating personal cookbooks, and contributing your own culinary creations to the community. Stay tuned for updates as we continue to build and refine RecipeVWR into the ultimate recipe management tool.

## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|------------|---------|---------|
| [![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)](https://react.dev/) | 19.1.1 | UI library |
| [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) | 5.x | Strongly typed JS |
| [![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) | 4.1.14 | Utility-first CSS |
| [![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/) | 4.x | Frontend build tool & dev server |
| [![Bun](https://img.shields.io/badge/-Bun-000000?logo=bun&logoColor=white)](https://bun.sh/) | Latest | Package manager & runtime |

### **Backend**
| Technology | Version | Purpose |
|------------|---------|---------|
| [![Spring Boot](https://img.shields.io/badge/-SpringBoot-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot) | 3.5.6 | REST API framework |
| Java | 17 | Backend language |
| Spring Data JPA | 3.x | Database access |
| Maven | 3.x | Dependency management & build |
| Lombok | 1.18.x | Reduce boilerplate code |
| [![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/) | Latest | Containerization & deployment |

### **Database**
| Technology | Version | Purpose |
|------------|---------|---------|
| [![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/) | 15.x | Relational database |
| Port | 5432 | Database connection |

### **Development Tools**
| Tool | Version | Purpose |
|------|---------|---------|
| Docker Compose | 3.9 | Orchestrate multi-container apps |
| Git | Latest | Version control |

## 📦 Key Dependencies

```
@gsap/react: ^2.1.2
@heroicons/react: ^2.2.0
@tailwindcss/vite: ^4.1.14
axios: ^1.12.2
gsap: ^3.13.0
react: ^19.1.1
react-dom: ^19.1.1
sonner: ^2.0.7
tailwindcss: ^4.1.14
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **lint**: `npm run lint`
- **preview**: `npm run preview`


## 📁 Project Structure

```
.
├── ris-backend
│   ├── .mvn
│   │   └── wrapper
│   │       └── maven-wrapper.properties
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── um
│       │   │       └── feri
│       │   │           └── si
│       │   │               └── ris_backend
│       │   │                   ├── RisBackendApplication.java
│       │   │                   ├── controller
│       │   │                   │   └── RecipeRestController.java
│       │   │                   ├── model
│       │   │                   │   └── Recipe.java
│       │   │                   ├── repository
│       │   │                   │   └── RecipeRepository.java
│       │   │                   └── service
│       │   │                       └── RecipeService.java
│       │   └── resources
│       │       └── application.properties
│       └── test
│           └── java
│               └── um
│                   └── feri
│                       └── si
│                           └── ris_backend
│                               └── RisBackendApplicationTests.java
└── ris-frontend
    ├── bun.lock
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.tsx
    │   ├── assets
    │   │   └── react.svg
    │   ├── components
    │   │   ├── AddRecipeForm.tsx
    │   │   ├── CategoryToggle.tsx
    │   │   ├── EditRecipeForm.tsx
    │   │   ├── Header.tsx
    │   │   ├── RecipeCard.tsx
    │   │   └── RecipeDash.tsx
    │   ├── index.css
    │   └── main.tsx
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies using your preferred package manager:
   - With **npm**: `npm install`
   - Or with **Bun** (recommended): `bun install`
3. Start development server:
   - `npm run dev` or `bun run dev`


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/bagiicpp/RecipeVWR.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.
