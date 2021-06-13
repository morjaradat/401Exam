import axios from 'axios';
import React, { Component } from 'react'
import './Main.css'

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []

    }
  }
  componentDidMount = () => {
    this.getData()
  }
  getData = async () => {
    const url = `http://localhost:3066/get-characters`
    const apiData = await axios.get(url)
    console.log(apiData.data)
    this.setState({ data: apiData.data })
  }
  addTOfav = async (e) => {
    const url = `http://localhost:3066/favorite`
    const body = {
      name: e.name,
      img: e.img,
      gender: e.gender,
      powerAraay: e.psiPowers
    }
    const addToFav = await axios.post(url, body)
    console.log(addToFav.data)
  }
  render() {
    return (
      <>
        <h1 className="main"> Home </h1>
        <div id='container'>
          {this.state.data.map((i, idx) => {
            return (
              <div key={idx} className="item" >
                <div>
                  <img src={i.img} alt='' className='characterImg' />
                </div>

                <div className='characterData'>
                  <h2>Name : {i.name}</h2>
                  <h3>Gender : {i.gender}</h3>
                  <button className="favButton" onClick={e => this.addTOfav(i)}>Add to Favorite</button>
                </div>

                {/* <Button  onClick={e => this.addTOfav(i)}>Add to Favorite</Button> */}


                <>
                  <div className="container2">

                    {i.psiPowers.map((y, index) => {
                      return (
                        <div className="container2Item">
                          <img className="ability" src={y.img} alt='' />
                          <h4>{y.name}</h4>
                        </div>
                      )
                    })}
                  </div>
                </>

              </div>
            )
          })}

        </div>

      </>
    )
  }
}

export default Main
