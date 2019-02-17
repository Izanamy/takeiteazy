function getLines(files) {
    // console.log(files);
    files.forEach(el => {
        // console.log(1, el.split)
        return  el.split('/n');
    });
};

function showTodos(files) {
    console.log(2, getLines(files));
    const linesArray = getLines(files);
    
    
    
    // return showTodos;
}
module.exports = showTodos;





    
    
        
