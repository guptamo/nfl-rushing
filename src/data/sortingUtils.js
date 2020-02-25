import { ascend, descend, flip, prop, sortWith } from 'ramda'

const transitionDirection = direction => direction === null
  ? 'asc'
  : direction === 'asc'
  ? 'desc'
  : null

const getDirectionIcon = direction => direction === null
  ? ' '
  : direction === 'asc'
  ? '+'
  : '-'

const ascendingLngComparator = ({Lng: aLng}, {Lng: bLng}) => {
  const isTouchdown = /^\w+T$/
  const isATouchdown = isTouchdown.test(aLng)
  const isBTouchDown = isTouchdown.test(bLng)

  if (!isATouchdown && !isBTouchDown) {
    return aLng > bLng
      ? 1
      : aLng === bLng
      ? 0
      : -1
  }
  
  if ( isATouchdown && !isBTouchDown) {
    return 1
  }

  if ( !isATouchdown && isBTouchDown) {
    return -1
  }

  const aValue = aLng.replace('T', '')
  const bValue = bLng.replace('T', '')
  
  return aValue > bValue
    ? 1
    : aValue === bValue
    ? 0
    : -1
}

const descendingLngComparator = flip(ascendingLngComparator)

const createSortingFunction = sortState => {
  const sortingComparators = Object.entries(sortState)
    .filter(([, value]) => value !== null)
    .map(([key, value]) => {
      if (key === 'Lng') {
        return value === 'asc'
          ? ascendingLngComparator
          : descendingLngComparator
      }
    
      return value === 'asc'
        ? ascend(prop(key))
        : descend(prop(key))
    })

  return sortWith(sortingComparators)
}

export {
  transitionDirection,
  getDirectionIcon,
  createSortingFunction
}