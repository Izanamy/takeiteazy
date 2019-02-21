const { getAllFilePathsWithExtension, readFile } = require('./fileSystem');
const { readLine } = require('./console');
const getTodos = require('./commands/todos_massive');
const showTodos = require('./commands/show');
const showImportantTodos = require('./commands/important')
// const showUsernameTodos = require('./commands/user')
const files = getFiles();
const formattedTodoLines = getTodos(files);

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
            showTodos(formattedTodoLines);
            console.table([1,2,3])
            break;
           
            case 'important':
            showImportantTodos(formattedTodoLines);
            break;
           

        case 'user {username}':
            // showUser(formattedTodoLines);
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

function showTitles() {
    console.log('| ! | User | Date | Comment | file |')
}


            
// TODO you can do it!



