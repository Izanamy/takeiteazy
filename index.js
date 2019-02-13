const { getAllFilePathsWithExtension, readFile } = require('./fileSystem');
const { readLine } = require('./console');

app();

function app () {
    const files = getFiles();

    console.log('Please, write your command!');
    readLine(processCommand);
}

function getFiles () {
    const filePaths = getAllFilePathsWithExtension(process.cwd(), 'js');
    return filePaths.map(path => readFile(path));
}

function processCommand (command) {
    switch (command) {
        case 'exit':
            process.exit(0);
            break;
        case 'show': 
            showTodos();
            break;
        case 'importance':
            showImportantTodos();
            break;
        case 'user':
            // TODO: сделать комманду user
            break;
        case 'sort':
            // TODO: сделать комманду sort
            break;
        case 'date':
            // TODO: сделать комманду date
            break;
        default:
            console.log('wrong command');
            break;
    }
}

function showTodos() { 
    files.forEach((el) =>
        el.match(/TODO/).input);
}
    

    

// function showImportantTodos() {
//     const importantTodos = filterImportance()
//     console.log(importantTodos);
// };

// function filterImportance() { 
//     const todosArray = getFiles();
//     const regExp = (/!/ig);
//     const filteredTodosArray = todosArray
//         .filter((el) => {
//             return el.match(regExp);
//         });
    
//     return filteredTodosArray;
// };





// TODO you can do it!