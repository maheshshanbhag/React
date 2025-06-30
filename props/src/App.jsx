
import Card from './components/Card'

function App() {
  const myObj = {
    name: "user3",
    age: 20
  }
  const myArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="user1" arr={myArr} btn="click me"/>
      <Card username="user2"/>
    </>
  )
}

export default App