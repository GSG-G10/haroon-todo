import { Input,Form,Button,Space,message,Modal} from 'antd';
import { useState } from 'react';


const AddToDo = ({ToDoList,setToDoList}) => {
  const [input, setInput] = useState('')

  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
    setToDoList([...ToDoList,input]);
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



  return (
    <>

  <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div
        style={{
          overflow: 'hidden',
        }}
      >
        <Form.Item
          name="todo"
          label="todo"
          rules={[
            {
              required: true,
            },
            {
              type: 'string',
              min: 6,
            },
          ]}
        >
          <Input placeholder="input placeholder" onChange={(e) => {setInput(e.target.value)}} />
        </Form.Item>
      </div>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Add
          </Button>

        </Space>
      </Form.Item>
    </Form>

        </Modal>






  
    </>
  );
};

export default AddToDo;




    //  <Search
    // placeholder="input search text"
    // allowClear
    // enterButton="Add"
    // size="large"
    // onSearch={onSearch}
    // /> 