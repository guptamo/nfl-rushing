const getRushingStats = () => {
  return new Promise(resolve => {
    const data = require('./rushing.json')
    resolve(data)
  })
}

export {
  getRushingStats
}