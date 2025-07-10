import React from "react";

function App() {
  const projects = [
    {
      name: "AI Assistant",
      description: "An AI that helps people with their daily tasks."
    },
    {
      name: "E-learning Platform",
      description: "A platform where students can learn coding interactively."
    },
    {
      name: "3D Model Viewer",
      description: "A web app to visualize and animate 3D models."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;