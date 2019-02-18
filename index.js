const { getAllFilePathsWithExtension, readFile } = require('./fileSystem');
const { readLine } = require('./console');
const showTodos = require('./commands/show');
const showImportantTodos = require('./commands/important')
const files = getFiles();

app();


function app () {
    
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
            console.log(showTodos(files));
            break;
           
        case 'important':
            const todos = showTodos(files);
            console.log(showImportantTodos(todos));
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
            
// TODO you can do it!



