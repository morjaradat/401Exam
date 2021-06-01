import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

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
        {this.state.data.map((i, idx) => {
          return (
            <Card key={idx} style={{ width: '18rem' }} className="HomeCard">
              <Card.Img variant="top" src={i.img} className="cardimg" />
              <Card.Body>
                <Card.Title>{i.name}</Card.Title>
                <Card.Text>
                  {i.gender}
                </Card.Text>
                <Button variant="primary" onClick={e => this.addTOfav(i)}>Add to Favroite</Button>
                <div>
                  {i.psiPowers.map((y, index) => {
                    return (
                      <>
                        <img src={y.img} alt='' />
                        <h4>{y.name}</h4>
                      </>
                    )
                  })}
                </div>
              </Card.Body>
            </Card>
          )
        })}
      </>
    )
  }
}

export default Main
