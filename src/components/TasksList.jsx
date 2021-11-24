import React from 'react';

const TaskList = ({tasks, setTask, activeMenu}) => {
    
    const [value, setValue] = React.useState('');
    const AddTask = () => {
        
        let count = tasks.length+1;
        // let title = 'Зробити щось'
        let today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        
        let newTask = { 
            id: count, 
            title: value,
            time: time,
            status: true,
            type: activeMenu,
            visibl: true
        }
        
        let newTasks = [...tasks, newTask];
        setTask(newTasks);
        setValue('')
        
    };
    
    const deleteTask = (id) => {
        let newTasks = [...tasks].filter(item => item.id!==id);
        // console.log(newTasks)
        setTask(newTasks);
    };

    const completeTask = (id) => {

        let newTasks = []
        tasks.forEach(item => {

            if(item.id===id){
                item.status = !item.status 
            }
            newTasks.push(item)
        });
        // console.log(newTasks)
        setTask(newTasks);
    };
    
    const [save, saveTask] = React.useState('');
    const [edit, setEdit] = React.useState(null);
    const editTask = (id, title) => { 
        saveTask(title)
        setEdit(id);
    };
    const saveEditTask = (id) =>{

        tasks.forEach(el => {
            if(el.id===id){
                el.title = save
            }
        })
        setTask(tasks);
        setEdit(null);
        saveTask('');
    }

    return(
        <div className="TaskList">
            <div className="NameOfList">{activeMenu}</div>
            <input type="text" placeholder='Введите текст' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={AddTask}>+</button>
            <hr/>
            <div className="innerList">
                {
                    tasks.filter(item => item.visibl).map((num, index) => (
                       
                        edit === num.id ?
                        <div className="task" key={index}>
                            <input type="text" value={save} onChange={(e)=>saveTask(e.target.value)}/>
                            <button onClick={() => saveEditTask(num.id)}>Сохранить</button>
                        </div>
                        :
                        <div className={!num.status ? 'taskClose' : 'taskOpen'} key={index} >{num.title}{'  '}{num.time}
                            <button className="dellBtn" onClick={() => editTask(num.id, num.title)}>edit</button>
                            <button className="dellBtn" onClick={() => completeTask(num.id)}>Complete</button>
                            <button className="dellBtn" onClick={() => deleteTask(num.id)}>Delete</button>

                        </div>
                    ))
                }

            </div>


        </div>
    );
};

export default TaskList;