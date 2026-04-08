# React-tuto

# vue-tuto
This project is a sample to show basic cases in React. It is split into 2 sub-projects.
- react-app which is the front app.
- react-back which is a simple back API.

## Requirements
- Java 21
- Maven
- node v24.13.1
- "bootstrap": "^5.3.8"
- "react": "^19.2.4"
- "react-dom": "^19.2.4"
- "react-router": "^7.13.2"
- "react-router-dom": "^7.13.2"

## Getting Started
Firstly, launch the back with following command line:
```bash
cd <project-path>
mvn spring-boot:run
```

then launch the front with:
```bash
cd <project-path>
npm run dev
```



## Projects and URLs

| Service | URL | Use case |
|---|---|---|
| front | http://localhost:5173 |Simple front project which emulate a Kanban without or without http call|
| back | http://localhost:8080 |Simple API which emulate persistence|

