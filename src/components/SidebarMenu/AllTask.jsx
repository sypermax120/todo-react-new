import React from 'react';

const AllTask = ({selectList, SidebarTaskA, SidebarTask, activeMenu}) => {

    return(
        <div className="SidebarTask AllTask" style={activeMenu==='AllTask' ? {...SidebarTaskA} : {...SidebarTask}} onClick={()=>selectList('AllTask')}>
            Всі
        </div>
    );
};

export default AllTask;