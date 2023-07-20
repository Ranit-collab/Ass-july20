var todoApp = [];
var counter = 1;

// create function
function create(){
  console.log("insertion of records");
  id = counter++;
  todoitem = prompt("Enter the task: ");
  status = prompt("Enter the status of the task");
  let ob = {
    "id": id,
    "todoitem": todoitem,
    "status": status
  }
  todoApp.push(ob);
  
}

// changestatus function
function changeStatus(){
  newStatus = "Completed";
  console.log("Get the details of the task using the id");
  choose = prompt("Enter the id: ")
  let itemToUpdate = todoApp.find(obj => obj.id == choose);
  if(itemToUpdate){
    console.log(itemToUpdate);
    let ask = prompt("Do you want to change the status of the task as completed y or n: ");
    if(ask=="y"){
      itemToUpdate.status = newStatus
      console.log("Status Updated!");
    }
    else{
      main();
    }
  }
  else{
    console.log("Invalid id!!");
    main();
  }
  
}

// list function
function list(){
  let select = prompt("Enter the status to see the items like Completed or not Completed")
  
  let filteredArray = todoApp.filter(item => item.status == select);
  filteredArray.forEach(item => console.log(item.todoitem))
  
}

// read function
function read(){
  console.log("Reading of items");
  let completed_arr=todoApp.filter((s)=>s.status==="Completed");
  let notcompleted_arr=todoApp.filter((s)=>s.status==="not Completed");
  console.log("completed items:",completed_arr);
  console.log("Not completed items:",notcompleted_arr);
}

// delete function
function deleteRec(){
  console.log("Deletion based on id:");
  give_id=prompt("Give the ID");
  const deletedArray = todoApp.filter(obj => obj.id != give_id);
  if (deletedArray.length === todoApp.length) {
  console.log(`Item with id ${give_id} not found in the array.`);
    main();
} else {
  console.log(`Item with id ${give_id} deleted successfully.`);
    todoApp = deletedArray;
}

}

// deleteall functions
function deleteAll(){
  console.log("Delete all records with status completed:");
  let resultArray = todoApp.filter(item => item.status == "not Completed")
  if(resultArray.length == todoApp.length){
    console.log("Please completed the task you have not completed a single task!!!!!!")
    main();
  }
  else{
    console.log("Completed task report deleted :)");
    todoApp = resultArray;
    main()
  }
}


// main function
function main(){
  let choice;
  while(true && choice!=7){
    console.log("Enter a choice 1.create 2.changeStatus 3.List 4.delete 5.deleteCompleted 6.readAllRecords 7.Exit")
    choice = prompt("Enter a choice: ");
    switch(true){
      case choice == 1:
        create();
        break;
      case choice == 2:
        changeStatus();
        break;
      case choice == 3:
        list();
        break;
      case choice == 4:
        deleteRec();
        break;
      case choice == 5:
        deleteAll();
        break;
      case choice == 6:
        read();
        break;
      case choice == 7:
        break;
      default:
        console.log("Invalid choice")
    }
    
  }
}
main();