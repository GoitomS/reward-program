
import './App.css';
import RewardsPage from './components/RewardsPage';
import { useEffect, useState } from 'react';
import rewardsCreator from './api/rewardsCreator';
import SearchComponent from './components/SearchComponent';

function App() {

    const rewards = rewardsCreator()
    const [id, setId] = useState('')
    const [dispData, setDispdata] = useState(rewards)

    const handleClick=()=>{
      const filteredData = rewards.filter(cust=> cust.id === id)
      setDispdata(filteredData)
  }

  const handleChange = (e) => {
    setId(e.target.value)
    if(!e.target.value){
      setDispdata(rewards)
    }
  }

  useEffect(()=>{

  }, [dispData])

    return (
    <div className="App">
      <SearchComponent data={rewards} handleChange = {handleChange} filter={handleClick}/>
      <RewardsPage rewards={dispData}/>
    </div>
  );
}

export default App;
