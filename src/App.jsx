
import './App.css'
import Bugget from './Bugget'
import { AddExpence } from './AddExpence'
import { ShowExpanceData } from './ShowExpanceData'
function App() { 
  return (
    <>
    <div className='mainContainer'>
      <h1>Bugget Planner</h1>
      <Bugget/>
      <AddExpence/>
      <ShowExpanceData/>
    </div>
     
    </>
  )
}
export default App
