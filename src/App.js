import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//to do item 입력 필드 컴포넌트
//유저가 어떤 값을 입력하는지 알아야 하니 usestate
const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");
  //유저가 usestate입력한 값을 input에 저장하겠다.
  // console.log(input);

  const onSubmit = () => {
    props.onSubmit(input);
    setInput("");
  };
  //버튼 클릭하면 인풋 내용 지워지게

  return (<div>
    <TextField
      id='todo-item-input'
      label='Todo Item'
      variant='outlined'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    {/* value 유저가 인풋에 입력한 값 보여주고 setinput 유저가 입력한 값 업데이트*/}
    <Button variant="outlined" onClick={onSubmit}>Submit</Button>
  </div>);
}

//todolist 컴포넌트 / array 형태로 리스트 받기 -> itemlist
const TodoItemList = (props) => {
  const todoList = props.todoItemList.map((todoItem, index) => {
    return <li key={index}>{todoItem.todoItemContent}</li>
  });

  return (<div>
    <ul>{todoList}</ul>
  </div>);
};

function App() {
  return (
    <div className="App">
      <TodoItemInputField onSubmit={() => {}}/>
      <TodoItemList todoItemList={[{
        todoItemContent: "오늘 할일"
      }]} />
    </div>
  );
}

export default App;
