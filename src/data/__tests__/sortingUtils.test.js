import { createSortingFunction } from "../sortingUtils"

describe('createSortingFunction() creates sort functions that ...', () => {
  const baseSortState = {
    Yds: null,
    Lng: null,
    TD: null
  }

  it('does not sort when all properties in the sortState are null', () => {
    const testPlayer1 = {
      Lng: '2',
      Yds: 25,
      TD: 3
    }
    const testPlayer2 = {
      Lng: '4T',
      Yds: 2,
      TD: 35
    }
    
    const sortFunction = createSortingFunction(baseSortState);
    const sortedData = sortFunction([testPlayer2, testPlayer1])
    expect(sortedData).toEqual([testPlayer2, testPlayer1])
  })

  describe('sorts by Lng when Lng is not null', () => {
    const lowLng = {
      Lng: '2',
      Yds: 25,
      TD: 3
    }
    const highLng = {
      Lng: '1000',
      Yds: 2,
      TD: 35
    }
    const midLng = {
      Lng: '30',
      Yds: 2,
      TD: 35
    }
    const highTLng = {
      Lng: '1000T',
      Yds: 2,
      TD: 35
    }
    const lowTLng = {
      Lng: '2T',
      Yds: 2,
      TD: 35
    }
    const midTLng = {
      Lng: '30T',
      Yds: 2,
      TD: 35
    }
      
    it('sorts by Lng ascending when Lng is "asc"', () => {
      const sortState = {...baseSortState, Lng: 'asc'}
      const unsortedState = [midLng, lowLng, highLng]
      
      const sortFunction = createSortingFunction(sortState);
      const sortedData = sortFunction(unsortedState)
      
      expect(sortedData).toEqual([lowLng, midLng, highLng])
    })
    
    it('sorts by Lng descending when Lng is "desc"', () => {
      const sortState = {...baseSortState, Lng: 'desc'}
      const unsortedState = [midLng, lowLng, highLng]
      
      const sortFunction = createSortingFunction(sortState);
      const sortedData = sortFunction(unsortedState)
      
      expect(sortedData).toEqual([highLng, midLng, lowLng])
    })

    it('ranks touchdown Lng values higher', () => {
      const sortState = {...baseSortState, Lng: 'desc'}
      const unsortedState = [midLng, lowTLng, highLng]
      
      const sortFunction = createSortingFunction(sortState);
      const sortedData = sortFunction(unsortedState)
      
      expect(sortedData).toEqual([lowTLng, highLng, midLng])
    })

    it('respects ranking of touchdown Lng values', () => {
      const sortState = {...baseSortState, Lng: 'desc'}
      const unsortedState = [midTLng, lowTLng, highTLng, highLng]
      
      const sortFunction = createSortingFunction(sortState);
      const sortedData = sortFunction(unsortedState)
      
      expect(sortedData).toEqual([highTLng, midTLng, lowTLng, highLng])
    })

    
  })

  describe('sorts by TD when TD is not null', () => {
    const lowTD = {
      Lng: '2',
      Yds: 25,
      TD: 1
    }
    const highTD = {
      Lng: '1000',
      Yds: 2,
      TD: 100
    }
    const midTD = {
      Lng: '30',
      Yds: 2,
      TD: 10
    }
      
    it('sorts by TD ascending when TD is "asc"', () => {
      const sortState = {...baseSortState, TD: 'asc'}
      const unsortedState = [midTD, lowTD, highTD]
      
      const sortFunction = createSortingFunction(sortState);
      const sortedData = sortFunction(unsortedState)
      
      expect(sortedData).toEqual([lowTD, midTD, highTD])
    })
    
    it('sorts by TD descending when TD is "desc"', () => {
      const sortState = {...baseSortState, TD: 'desc'}
      const unsortedState = [midTD, lowTD, highTD]
      
      const sortFunction = createSortingFunction(sortState);
      const sortedData = sortFunction(unsortedState)
      
      expect(sortedData).toEqual([highTD, midTD, lowTD])
    })
  })

  describe('sorts by Yds when Yds is not null', () => {
    const lowYds = {
      Lng: '2',
      Yds: 100,
      TD: 22
    }
    const highYds = {
      Lng: '1000',
      Yds: 1000,
      TD: 534
    }
    const midYds = {
      Lng: '30',
      Yds: 500,
      TD: 23
    }
      
    it('sorts by Yds ascending when Yds is "asc"', () => {
      const sortState = {...baseSortState, Yds: 'asc'}
      const unsortedState = [midYds, lowYds, highYds]
      
      const sortFunction = createSortingFunction(sortState);
      const sortedData = sortFunction(unsortedState)
      
      expect(sortedData).toEqual([lowYds, midYds, highYds])
    })
    
    it('sorts by Yds descending when Yds is "desc"', () => {
      const sortState = {...baseSortState, Yds: 'desc'}
      const unsortedState = [midYds, lowYds, highYds]
      
      const sortFunction = createSortingFunction(sortState);
      const sortedData = sortFunction(unsortedState)
      
      expect(sortedData).toEqual([highYds, midYds, lowYds])
    })
  })
})