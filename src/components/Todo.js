import { Card,Button,message } from 'antd';
import 'antd/dist/antd.css'; 

const ToDo = ({title,ToDoList,setToDoList}) => {
  const Delete = (todo) => {
    message.success(`${todo} has been removed successfully`);
    const index = ToDoList.indexOf(todo);
    ToDoList.splice(index, 1)
    setToDoList([...ToDoList])
  }

  return (
    <div className="site-card-border-less-wrapper">
    <Card  bordered={false} style={{ width: '100%' }}>
      <p>{title}</p>
        <Button type="primary" danger onClick={() => Delete(title)}>
        Delete
        </Button>
    </Card>
  </div>
  );
};

export default ToDo;
