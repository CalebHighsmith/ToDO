import './App.css';
import {Heading} from '@chakra-ui/react';
import TodoList  from './components/Todolist'
import AddToDo from './components/addtodo'
import { useColorMode, VStack, IconButton} from '@chakra-ui/react'
import {RiLightbulbFlashFill} from 'react-icons/ri'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {useState, useEffect} from 'react'

function App() {

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
    
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id){
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  function addToDo(todo){
    setTodos([...todos, todo]);
  }

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <VStack p={4}>
    <IconButton icon={colorMode === 'light' ? <RiLightbulbFlashFill/> : <HiOutlineLightBulb/>} isRound='true' size='lg' alignSelf="flex-end" onClick={toggleColorMode} />
      <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient='linear(to-r, red.500, red.300, orange.500)' bgClip="text">Todo Application</Heading>
        <TodoList p={4} todos={todos} deleteTodo={deleteTodo}/>
        <AddToDo addToDo={addToDo} />
    </VStack>
  );
}

export default App;
