import React, {useState} from 'react';

const About = () => {
    const [ projectName, setProjectName] = useState('Реактивный магазин')

    return (
        <div>
            Добро пожаловать в наш {projectName}!!!!
        </div>
    );
};

export default About;