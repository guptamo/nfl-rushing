import React from 'react'

const Player = ({ stats: {
  Player: name,
  Team: team,
  Pos: pos,
  Att: att,
  "Att/G": attG,
  Yds: yds,
  Avg: avg,
  "Yds/G": ydsG,
  TD: td,
  Lng: lng,
  "1st": first,
  "1st%": firstPercentage,
  "20+": twentyPlus,
  "40+": fourtyPlus,
  "FUM": fum
}}) => <tr>
      <td>{ name }</td>
      <td>{ team }</td>
      <td>{ pos }</td>
      <td>{ att }</td>
      <td>{ attG }</td>
      <td>{ yds }</td>
      <td>{ avg }</td>
      <td>{ ydsG }</td>
      <td>{ td }</td>
      <td>{ lng }</td>
      <td>{ first }</td>
      <td>{ firstPercentage }</td>
      <td>{ twentyPlus }</td>
      <td>{ fourtyPlus }</td>
      <td>{ fum }</td>
    </tr>

export { Player }