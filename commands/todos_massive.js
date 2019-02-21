function getTodos(files) {
    const linesArray = getlinesArray(files);
    const formattedTodoLines = linesArray.map(el => el.replace(/.*(?=\/\/ TODO)/, ''));

    return formattedTodoLines;
};


function getlinesArray(files) {
    const todoLines = [];
    

    files.forEach(el => {
        const lines = el.split('\n');

        lines.forEach(line => {
            if (line.match(/\/\/ TODO/i)) {
                todoLines.push(line.match(/TODO/i).input);
            }
        })
    });

    return todoLines;
};


module.exports = getTodos;