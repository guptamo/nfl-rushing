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
    let sortState = {
      Yds: null,
      Lng: null,
      TD: null
    }
    let header

    act(() => {
      render(<RushingTable sortState={sortState} data={[]} setSortState={setSortStateSpy} />, container)
      header = container.querySelectorAll("th.filterheader")[0]
      header.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

    expect(setSortStateSpy).toHaveBeenCalledWith({
      Yds: 'asc',
      TD: null,
      Lng: null
    })
  })

  it('correctly calls setSortState when the TD header is clicked', () => {
    const sortState = {
      Yds: null,
      Lng: null,
      TD: null
    }
    
    act(() => {
      render(<RushingTable sortState={sortState} data={[]} setSortState={setSortStateSpy} />, container)
      const [_, header] = container.querySelectorAll("th.filterheader")
      header.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

      expect(setSortStateSpy).toHaveBeenCalledWith({
        Yds: null,
        TD: 'asc',
        Lng: null
      })
    })

  it('correctly calls setSortState when the Lng header is clicked', () => {
    const sortState = {
      Yds: null,
      Lng: null,
      TD: null
    }
    
    act(() => {
      render(<RushingTable sortState={sortState} data={[]} setSortState={setSortStateSpy} />, container)
      const header = container.querySelectorAll("th.filterheader")[2]
      header.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

    expect(setSortStateSpy).toHaveBeenCalledWith({
      Yds: null,
      TD: null,
      Lng:'asc'
    })
  })

  it('correctly transitions sort directions from null to "asc"', () => {
    const sortState = {
      Yds: null,
      Lng: null,
      TD: null
    }
    
    act(() => {
      render(<RushingTable sortState={sortState} data={[]} setSortState={setSortStateSpy} />, container)
      const [Yds] = container.querySelectorAll("th.filterheader")
      Yds.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

    expect(setSortStateSpy).toHaveBeenNthCalledWith(1,{
      Yds: 'asc',
      TD: null,
      Lng: null
    })
  })

  it('correctly transitions sort directions from "asc" to "desc"', () => {
    const sortState = {
      Yds: 'asc',
      Lng: null,
      TD: null
    }
    
    act(() => {
      render(<RushingTable sortState={sortState} data={[]} setSortState={setSortStateSpy} />, container)
      const [Yds] = container.querySelectorAll("th.filterheader")
      Yds.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

    expect(setSortStateSpy).toHaveBeenCalledWith({
      Yds: 'desc',
      TD: null,
      Lng: null
    })
  })

  it('correctly transitions sort directions from "desc" to null', () => {
    const sortState = {
      Yds: 'desc',
      Lng: null,
      TD: null
    }
    
    act(() => {
      render(<RushingTable sortState={sortState} data={[]} setSortState={setSortStateSpy} />, container)
      const [Yds] = container.querySelectorAll("th.filterheader")
      Yds.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })

    expect(setSortStateSpy).toHaveBeenCalledWith({
      Yds: null,
      TD: null,
      Lng: null
    })
  })

  it('renders all the players', () => {
    const sortState = {
      Yds: null,
      Lng: null,
      TD: null
    }
    const data = [
      {
        "Player":"Joe Banyard",
        "Team":"JAX",
        "Pos":"RB",
        "Att":2,
        "Att/G":2,
        "Yds":7,
        "Avg":3.5,
        "Yds/G":7,
        "TD":0,
        "Lng":"7",
        "1st":0,
        "1st%":0,
        "20+":0,
        "40+":0,
        "FUM":0
      },
      {
        "Player":"Shaun Hill",
        "Team":"MIN",
        "Pos":"QB",
        "Att":5,
        "Att/G":1.7,
        "Yds":5,
        "Avg":1,
        "Yds/G":1.7,
        "TD":0,
        "Lng":"9",
        "1st":0,
        "1st%":0,
        "20+":0,
        "40+":0,
        "FUM":0
      }
    ]
    
    let rows
    act(() => {
      render(<RushingTable sortState={sortState} data={data} setSortState={setSortStateSpy} />, container)
      rows = container.querySelectorAll("tbody tr")
    })

    expect(rows.length).toBe(2)
  })
})
