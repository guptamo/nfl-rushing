import React from 'react'

import { Player } from '../Player'
import { transitionDirection, getDirectionIcon } from '../../data/sortingUtils'

const RushingTable = ({data, setSortState, sortState}) => {
  const transitionSortState = column => () => setSortState({
    ...sortState,
    [column]: transitionDirection(sortState[column])
  })

  return <table className='pure-table pure-table-bordered'>
    <thead>
      <tr>
        <th>Player</th>
        <th>Team</th>
        <th>Pos</th>
        <th>Att</th>
        <th>Att/G</th>
        <th onClick={ transitionSortState('Yds') }>Yrds { getDirectionIcon(sortState.Yds) }</th>
        <th>Avg</th>
        <th>Yds/G</th>
        <th onClick={ transitionSortState('TD') }>TD { getDirectionIcon(sortState.TD) }</th>
        <th onClick={ transitionSortState('Lng') }>Lng { getDirectionIcon(sortState.Lng) }</th>
        <th>1st</th>
        <th>1st%</th>
        <th>20+</th>
        <th>40+</th>
        <th>FUM</th>
      </tr>
    </thead>
    <tbody>
      {data.map(row => <Player stats={ row } key={row.Player}></Player>)}
    </tbody>
  </table>
  }

export { RushingTable }