import React from 'react';

const WorkTask = ({selectList, SidebarTaskA, SidebarTask, activeMenu}) => {

    return(
        <div className="SidebarTask WorkTask" style={activeMenu==='WorkTask' ? {...SidebarTaskA} : {...SidebarTask}} onClick={()=>selectList('WorkTask')}>
            Робота
        </div>
    );
};

export default WorkTask;