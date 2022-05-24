import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = [];

export default class Main extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           tasks: [],
       };
   }
   createTask = (task) => {
       if(task.trim() === ''){
           alert('You can\'t put empty string!');
           return;
       }

       tasks.push({task, isCompleted:false});
       this.setState({tasks: tasks});
   }

   deleteTask = (taskId) => {
       tasks.splice(taskId, 1);
       this.setState({ tasks: tasks });
   }
   render(){
    return (
        <div>
            <h1>Todos</h1>
            <div>
                <CreateTask createTask={this.createTask}/>
                <br/>
                <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
            </div>
        </div>
    )
}
}

