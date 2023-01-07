import React from 'react'
import '../styles/RewardsPage.css'
const RewardsPage = ({rewards}) => {

  return (
    <div className="rewards-list">

      <table className='rewards-list-table'>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>No. of Transations</th>
            <th>Reward points</th>
          </tr>
        </thead>
        
        <tbody>
          {rewards.map(row => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.numOfTransactions}</td>
                <td>{row.rewardPoints}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </div>
  )
}

export default RewardsPage