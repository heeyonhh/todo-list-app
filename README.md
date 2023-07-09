# React + Firebase 포트폴리오 프로젝트


## 📱Todo list

## 0709


### 1. React Set Up + usestate input 필드 + 버튼 + props todo item List

npx create-react-app todo-list-app / app.js 정리 / 깃허브 push

app.js > Todo 아이템 입력할 TodoItemInputField 컴포넌트 만들기 / const props

<TodoItemInputField /> return 에 추가

npm install @mui/material @emotion/react @emotion/styled

import useState , TextField from '@mui/material/TextField

const [input, setInput] = useState(""); / props return <TextField /> 추가

버튼 만들기 / import Button / props return <Button> 추가

버튼 눌렸을 때 onSubmit callback 콜 해주기

onSubmit 컴포넌트 추가 / 프롭스 컴포넌트 버튼에 onClick={onSubmit} 추가 / 펑션 onSubmit={() => {}} 추가

등록된 Todo 아이템 보여줄 TodoItemList 컴포넌트 만들기 / const props / 펑션 <TodoItemList />

props 로 등록된 Todo 아이템 받기 / const props.todoItemList.map li key / 펑션 <TodoItemList todoItemList={[]} />

