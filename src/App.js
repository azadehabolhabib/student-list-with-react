import React,{useState} from "react";
import Students from './components/students/students.js';
import './App.css';

const App=()=>{

        const[students,setstudents]=useState([
            {id:1,name:'bahar',classnumber:254,phonenumber:94568,email:'reactapp.ir@gmail.com'},
            {id:2,name:'sahar',classnumber:664,phonenumber:94568,email:'reactapp.ir@gmail.com'},
            {id:3,name:'nahid',classnumber:244,phonenumber:94568,email:'reactapp.ir@gmail.com'},
            {id:4,name:'leyli',classnumber:114,phonenumber:94568,email:'reactapp.ir@gmail.com'},
        ])
    

    return(
        <div className="App">
            <Students
            studentslist={students}
            />
            </div>   
             );
}
export default App;