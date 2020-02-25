import React, { useState, useEffect } from 'react'

const useRushingStats = defaultData => {
  const [ rushingStats, setRushingStats ] = useState(defaultData)
  
  useEffect(() => {
    const fetchData = () => {
      const data = require('./rushing.json')
      setRushingStats(data)
    };
    fetchData()
  }, [])

  return [ rushingStats, setRushingStats ]
}

export { useRushingStats }