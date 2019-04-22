

export const toggleLesson = (module, lesson) => {
    return {
      type: 'TOGGLE_LESSON',
      module: module,
      lesson: lesson
    };
}

