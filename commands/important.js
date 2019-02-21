
function showImportantTodos(todoLines) {
    const sortImportant = [];
    todoLines.forEach(el => { 
        if (el.match(/\!/)) {
            sortImportant.push(el.match(/\!/).input);
        }
    });

    sortImportant.forEach(el => console.log(el));
};
    
    


module.exports = showImportantTodos;
    
    