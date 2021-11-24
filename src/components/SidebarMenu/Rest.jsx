import React from 'react';

const Rest = ({selectList, SidebarTaskA, SidebarTask, activeMenu}) => {

    return(
        <div className="SidebarTask Rest" style={activeMenu==='Rest' ? {...SidebarTaskA} : {...SidebarTask}} onClick={()=>selectList('Rest')}>
            Відпочинок
        </div>
    );
};

export default Rest;