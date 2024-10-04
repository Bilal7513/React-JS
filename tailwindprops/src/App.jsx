import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-700 text-black p-4 rounded-xl mb-4'>Bilal Irfan</h1>
      <Card username="Bilal Irfan" btnText="Click Me"/>
      <Card username="Bilal Ganatra"/>
    </>
  )
}

export default App
