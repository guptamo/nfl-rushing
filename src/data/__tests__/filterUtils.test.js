import { filterByName } from "../filterUtils"

describe('filterByName() creates a function that ....', () => {
  it('filters rows where the Player name contains the filter string', () => {
    const filterJoe = filterByName('Joe')
    const testRows = [
      {Player: 'Jacques'},
      {Player: 'Joseph'},
      {Player: 'Joesephine'},
    ]

    expect(filterJoe(testRows)).toEqual([{Player: 'Joesephine'}])
  })

  it('is case insensitive', () => {
    const filterJoe = filterByName('Joe')
    const testRows = [
      {Player: 'Jacques'},
      {Player: 'Joseph'},
      {Player: 'joesephine'},
    ]

    expect(filterJoe(testRows)).toEqual([{Player: 'joesephine'}])
  })

  it('returns an empty array if nothing matches', () => {
    const filterJoe = filterByName('Joe')
    const testRows = [
      {Player: 'Jacques'},
      {Player: 'Joseph'},
      {Player: 'Jamie'},
    ]

    expect(filterJoe(testRows)).toEqual([])
  })


})
