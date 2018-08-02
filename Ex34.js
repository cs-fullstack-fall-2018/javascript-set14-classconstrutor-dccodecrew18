class ToDo{
   constructor(name, dueDate, list ){
       this.name = name;
       this.dueDate = dueDate;
       this.list = [];
   }
}

function main(){
   var newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"]);
    alert(newToDoList.list);
    alert(newToDoList.dueDate);
    alert(newToDoList.name);
}

main();