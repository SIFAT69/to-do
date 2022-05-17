import { render } from "@testing-library/react";
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
           alert('Nope');
           return;
       }

       tasks.push({task, isCompleted:false});
       this.setState({tasks: tasks});
   }
   render(){
    return (
        <div>
            <h1>Todos</h1>
            <div>
                <CreateTask createTask={this.createTask}/>
                <br/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        </div>
    )
}
}

