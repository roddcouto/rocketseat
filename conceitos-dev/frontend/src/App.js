import React, { useState } from 'react';

import './App.css'
import backgroundImage from './assets/notebookwebp.jpeg'

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-End Web']);

    function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`);
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
        console.log(projects);
    };

    return (
        <>
           <Header title="Projects" />

           <img width={980}src={backgroundImage} />
           <ul>
               {projects.map(project => <li key={project}>{project}</li>)}
           </ul>

           <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
};

export default App;