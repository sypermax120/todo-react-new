import React from 'react';
import TaskList from './components/TasksList'
import SidebarMenu from './components/SidebarMenu'


function App() {

  const AllTasks = [
    {
    id: 1, 
    title: 'Зробити щось',
    time: '21:44:19',
    status: true,
    type: 'Study',
    visibl: true
  },
  {
    id: 2, 
    title: 'Зробити щось',
    time: '22:48:19',
    status: true,
    type: 'WorkTask',
    visibl: true
  },
  {
    id: 3, 
    title: 'Зробити щось',
    time: '23:48:19',
    status: false,
    type: 'Rest',
    visibl: true
  }
];

  const [tasks, setTask] = React.useState(AllTasks);

  const [activeMenu, setactiveMenu] = React.useState('AllTask');


  return (
    <div className="App">
      <SidebarMenu tasks={tasks} setTask={setTask} activeMenu={activeMenu} setactiveMenu={setactiveMenu} />
      <TaskList tasks={tasks} setTask={setTask} activeMenu={activeMenu} />

    </div>
  );
}

export default App;
