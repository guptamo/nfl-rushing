import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { compose } from 'ramda'

import { createSortingFunction } from './data/sortingUtils'
import { filterByName } from './data/filterUtils'
import { RushingTable } from './components/RushingTable'
import { DownloadLink } from './components/DownloadLink'
import { useRushingStats } from './data/useRushingStats'

const App = () => {
  const [ sortState, setSortState ] = useState({
    Yds: null,
    Lng: null,
    TD: null
  })
  const [ nameFilter, setNameFilter ] = useState('')
  const [ rushingStats ] = useRushingStats([])

  const handleChange = e => {
    setNameFilter(e.target.value)
  }

  const sortedState = compose(
    createSortingFunction(sortState),
    filterByName(nameFilter)
  )(rushingStats)
  
  return <div>
    <h1>NFL Rushing</h1>
    <div className="controls">
      <input className='namefilter' placeholder='Filter by name...' type='text' value={ nameFilter } onChange={ handleChange } />
      <DownloadLink data={ sortedState }/>
    </div>
    <RushingTable data={ sortedState } setSortState={ setSortState } sortState={ sortState } />
  </div>
  
}

ReactDOM.render(<App />, document.getElementById('app'))
