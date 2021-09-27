import { Layout ,Menu} from 'antd';
import ToDo from './components/Todo';
import AddToDo from './components/AddToDo';
import {useState} from 'react';
import './App.css';
const { Header, Content, Footer } = Layout;



const App = () => {
  const [ToDoList, setToDoList] = useState([])
  return (

  <Layout className="layout">
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      {new Array(1).fill(null).map((_, index) => {
        const key = index + 1;
        return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
      })}
    </Menu>
  </Header>
  <Content style={{ padding: '0 50px' }}>
  
    <div className="site-layout-content">
    <AddToDo ToDoList={ToDoList} setToDoList={setToDoList}/>
    {ToDoList.map((title)=>{
             return <ToDo ToDoList={ToDoList} setToDoList={setToDoList} title={title} />})}
    </div>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>






  );
};


export default App;
