import React from "react";

export default function Projects() {
  const projects = [
    { id: 1, name: "Website Redesign", status: "In Progress" },
    { id: 2, name: "Mobile App", status: "Completed" },
    { id: 3, name: "Internal Tool", status: "Planning" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Projects Page</h1>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="p-2 border">{project.id}</td>
              <td className="p-2 border">{project.name}</td>
              <td className="p-2 border">{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
