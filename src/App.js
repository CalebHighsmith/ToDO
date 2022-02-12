import './App.css';
import {Heading, Icon} from '@chakra-ui/react';
import TodoList  from './components/Todolist'
import AddToDo from './components/addtodo'
import { Stack, HStack, VStack, IconButton} from '@chakra-ui/react'
import {BsLightbulbFill} from 'react-icons/bs'
import {useState, useEffect} from 'react'

function App() {
  const initialTodos = [
    {id: 1, body:"Feed the dogs"}, {id: 2, body:"Go to the store"},
  ];

  const [todos, setTodos] = useState(initialTodos)

  function deleteTodo(id){
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  function addToDo(todo){
    setTodos([...todos, todo]);
  }

  return (
    <VStack p={4}>
    <IconButton icon={<BsLightbulbFill/>} isRound='true' size='lg' alignSelf="flex-end" />
      <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient='linear(to-r, red.500, red.300, orange.500)' bgClip="text">Todo Application</Heading>
        <TodoList p={4} todos={todos} deleteTodo={deleteTodo}/>
        <AddToDo addToDo={addToDo} />




    </VStack>
  );
}

export default App;
