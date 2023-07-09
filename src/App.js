import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

let todoItemId = 0;

//to do item 입력 필드 컴포넌트
//유저가 어떤 값을 입력하는지 알아야 하니 usestate
const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");

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

const TodoItem = (props) => {
  //finish가 맞으면 선을 긋기 (클릭했을때 온클릭 이벤트일때)
  const style = props.todoItem.isFinished ? { textDecoration: 'line-through' } : {};
  return (<li>
    <span style={style} onClick={() => props.onTodoItemClick(props.todoItem)}>{props.todoItem.todoItemContent}</span>
    <Button variant="outlined" onClick={() => props.onRemoveClick(props.todoItem)}>Remove</Button>
  </li>);
};

const TodoItemList = (props) => {
  const todoList = props.todoItemList.map((todoItem, index) => {
  return <TodoItem
      key={index}
      todoItem={todoItem}
      onTodoItemClick={props.onTodoItemClick}
      onRemoveClick={props.onRemoveClick}
    />;
  });

  return (<div>
    <ul>{todoList}</ul>
  </div>);
};

function App() {
  const [todoItemList, setTodoItemList] = useState([]);

  const onSubmit = (newTodoItem) => {
    setTodoItemList([...todoItemList, {
      id: todoItemId++,
      todoItemContent: newTodoItem,
      isFinished: false,
    }]);
  };

  const onTodoItemClick = (clickedTodoItem) => {
    setTodoItemList(todoItemList.map((todoItem) => {
      if (clickedTodoItem.id === todoItem.id) {
        return {
          id: clickedTodoItem.id,
          todoItemContent: clickedTodoItem.todoItemContent,
          isFinished: !clickedTodoItem.isFinished,
        };
        //클릭하고 id 만났을 때 피니쉬필드만 반대로 바꿔줘라
      } else {
        return todoItem;
        //나머지 애들은 그대로 킵하고 
      }
    }));
  };

  const onRemoveClick = (removedTodoItem) => {
    setTodoItemList(todoItemList.filter((todoItem) => {
      return todoItem.id !== removedTodoItem.id;
    }));
  };
    
  return (
    <div className="App">
      <TodoItemInputField onSubmit={onSubmit} />
      <TodoItemList
        todoItemList={todoItemList}
        onTodoItemClick={onTodoItemClick}
        //리스트 클릭 스트라이프
        onRemoveClick={onRemoveClick}
      />

    </div>
  );
}

export default App;
