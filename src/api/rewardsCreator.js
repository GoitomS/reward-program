import rewardsApi from "./rewardsApi"

const RewardsCreator = () => {

  const rewardsCalculator = (value) => {
    if (value > 100) {
      return 2 * (value - 100) + 50
    } else if (value > 50) {
      return value - 50
    } else return 0
  }

  const data = rewardsApi()
  const names = new Set()
  const rewards = []
  data.forEach(transaction => {
    if (names.has(transaction.customerName)) {
      rewards.forEach(ele => {
        if (ele.id === transaction.customerId) {
          ele.numOfTransactions++
          ele.rewardPoints += rewardsCalculator(transaction.transactionPrice)
        }
      })

    } else {
      names.add(transaction.customerName)
      rewards.push({
        id: transaction.customerId,
        name: transaction.customerName,
        numOfTransactions: 1,
        rewardPoints: rewardsCalculator(transaction.transactionPrice)
      })
    }
  })
  return rewards
}

export default RewardsCreator