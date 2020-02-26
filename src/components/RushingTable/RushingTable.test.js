import React from 'react'
import { act } from 'react-dom/test-utils'
import {render, unmountComponentAtNode } from 'react-dom'
import { RushingTable } from './RushingTable'

describe('<RushingTable />', () => {
  let container = null
  let setSortStateSpy

  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
    setSortStateSpy = jest.fn()
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it('correctly calls setSortState when the Yrds header is clicked', () => {
    const sortState = {
      Yds: null,
      Lng: null,
      TD: null
    }
    
    act(() => {
      render(<RushingTable sortState={sortState} data={[]} setSortState={setSortStateSpy} />, container)
      const button = container.querySelector("th.filterheader:nth-child(0)")
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
  })
})