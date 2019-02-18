function showImportantTodos(todos) {
    const sortImportant = [];
    todos.forEach(el => { 
        if (el.match(/\!/)) {
            sortImportant.push(el.match(/\!/).input);
        }
    });

    return sortImportant;
};

module.exports = showImportantTodos;
    
    