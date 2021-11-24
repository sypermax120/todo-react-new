import React from 'react';

const Study = ({selectList, SidebarTaskA, SidebarTask, activeMenu}) => {

    return(
        <div className="SidebarTask Study" style={activeMenu==='Study' ? {...SidebarTaskA} : {...SidebarTask}} onClick={()=>selectList('Study')}>
            Навчання
        </div>
    );
};

export default Study;