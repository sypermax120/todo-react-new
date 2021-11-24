import React from 'react';
import AllTask from './SidebarMenu/AllTask';
import WorkTask from './SidebarMenu/WorkTask';
import Study from './SidebarMenu/Study';
import Rest from './SidebarMenu/Rest';

const SidebarMenu = ({tasks, setTask, activeMenu, setactiveMenu}) => {

    const SidebarTaskA = {
            width: "100%",
            borderRadius: "20px",
            padding: "15px",
            marginBottom: "10px",
            backgroundColor: "rgb(241, 218, 183)"
    }

    const SidebarTask = {
        width: "100%",
        borderRadius: "20px",
        padding: "15px",
        marginBottom: "10px",
    }


    const makeVisibl = () => {

        let newTasks = []
        for(let i = 0; tasks.length > i; i++){
            newTasks.push(tasks[i])
            newTasks[i].visibl = true 
        }
        return newTasks

    };

    const selectList = (divName) => {
        setactiveMenu(divName);

        if(divName==='AllTask'){
            let newTasks = makeVisibl()
            setTask(newTasks);
        }else{
            let newTasks = makeVisibl()
            
            for(let i = 0; newTasks.length > i; i++){
   
                if(newTasks[i].type !== divName){
                    newTasks[i].visibl = false 
            }};
            setTask(newTasks);
            }

        // console.log(tasks);

        // document.querySelectorAll('SidebarTask')[0].style.backgroundColor="rgb(141, 218, 183)";
        // document.getElementsByClassName(divName)[0].style.backgroundColor="rgb(241, 218, 183)";
    };

    return(
        <div className="Sidebar">Список задач
            <div className="inner-sidebar">
                {
                    
                }
                <AllTask selectList={selectList} SidebarTaskA={SidebarTaskA} SidebarTask={SidebarTask} activeMenu={activeMenu}/>
                <WorkTask selectList={selectList} SidebarTaskA={SidebarTaskA} SidebarTask={SidebarTask} activeMenu={activeMenu}/>
                <Study selectList={selectList} SidebarTaskA={SidebarTaskA} SidebarTask={SidebarTask} activeMenu={activeMenu}/>
                <Rest selectList={selectList} SidebarTaskA={SidebarTaskA} SidebarTask={SidebarTask} activeMenu={activeMenu}/>
            </div>

        </div>
    );
};

export default SidebarMenu;