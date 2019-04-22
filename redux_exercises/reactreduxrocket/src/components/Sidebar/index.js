import React from 'react';

import { connect } from 'react-redux';

// import { Container } from './styles';

const toggleLesson = (module, lesson) => {
    return {
      type: 'TOGGLE_LESSON',
      module: module,
      lesson: lesson
    };
}

const Sidebar = ({modules, dispatch}) => (
  <aside>
    {modules.map( module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
            { module.lessons.map(lesson => (
                <li key={lesson.id}>
                    {lesson.title}
                    <button onClick={() => dispatch(toggleLesson(module, lesson))}>Selecionar</button>
                </li>
            ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
    modules: state.modules
});


export default connect(mapStateToProps)(Sidebar);
