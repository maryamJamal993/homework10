import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import List from './List'

function App() {
  
  return (
    <>
      <List items={["tokyo","amman","doha","california"]} listName="cities" />
      <List items={["Japan","Jordan","UK","USA"]} listName="countries" />
    </>
  )
}

export default App
