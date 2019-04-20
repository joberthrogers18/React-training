import React, { Component } from 'react';

// import { Container } from './styles';

export default class VSidebar extends Component {
  state = {
    modules: [
      {
        id: 1,
        title: 'Iniciando com react',
        lessons: [
          { id: 1, title: 'Primeira aula' },
          { id: 2, title: 'Segunda aula' },
        ]
      },
      {
        id: 2,
        title: 'Aprendendo Redux',
        lessons: [
          { id: 3, title: 'Terceira aula' },
          { id: 4, title: 'Quarta aula' },
        ]

      }
    ]
  };

  render() {

    const { modules } = this.state;

    return (
      <aside>
        {modules.map( module => (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
               { module.lessons.map(lesson => (
                    <li key={lesson.id}>
                        {lesson.title}
                    </li>
                ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}
