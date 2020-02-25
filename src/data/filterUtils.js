import { filter } from 'ramda'

const filterByName = nameFilter => filter(row => row.Player.toLowerCase().includes(nameFilter.toLowerCase())) 

export {
  filterByName
}