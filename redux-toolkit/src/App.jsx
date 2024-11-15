import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { useSelector, useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { setTodo } from './features/todo/todoSlice'


function App() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"))
    if(todo){
      dispatch(setTodo(todo))
    }
  }, [dispatch])

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
