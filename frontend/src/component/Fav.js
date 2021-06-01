import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios';

import Form from './Form'

export class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showForm: false,
      slug: '',
      name: '',
      gender: ''
    }
  }
  componentDidMount = () => {
    this.getData()
  }
  getData = async () => {
    const url = `http://localhost:3066/favorite`
    const apiData = await axios.get(url)
    console.log(apiData.data)
    this.setState({ data: apiData.data })
  }
  showUpdate = (e) => {
    this.setState({
      showForm: true,
      slug: e.slug,
      name: e.name,
      gender: e.gender
    })
  }
  updateName = (e) => {
    this.setState({ name: e.target.value })
  }
  updateGender = (e) => {
    this.setState({ gender: e.target.value })
  }
  update = async (e) => {
    e.preventDefault();
    this.setState({ showForm: false })
    let url = `http://localhost:3066/favorite/${this.state.slug}`
    const body = {
      name: this.state.name,
      gender: this.state.gender
    }
    const updateData = await axios.put(url, body)
    console.log(updateData.data)
    this.getData()
  }
  delete = async (e) => {
    let url = `http://localhost:3066/favorite/${e}`
    const updateData = await axios.delete(url)
    console.log(updateData.data)
    this.getData()
  }
  render() {
    return (
      <>
        <h1 className="main">Favorite</h1>
        {this.state.showForm &&
          <Form
            update={this.update}
            updateName={this.updateName}
            updateGender={this.updateGender}
            name={this.state.name}
            gender={this.state.gender}
          />
        }
        {this.state.data.map((i, idx) => {
          return (
            <Card key={idx} style={{ width: '18rem' }} className="HomeCard">
              <Card.Body>

                <Card.Title>{i.name}</Card.Title>
                <Card.Text>
                  {i.gender}
                </Card.Text>
                <Button variant="primary" onClick={e => this.showUpdate(i)}>Update </Button>
                <Button variant="primary" className="deleteButton" onClick={e => this.delete(i.slug)}>delete </Button>
                <div>
                  <ul>
                    {i.psiPowers.map((y, index) => {
                      return (
                        <li>{y.name}</li>
                      )
                    })}
                  </ul>

                </div>
              </Card.Body>
            </Card>
          )
        })}
      </>
    )
  }
}

export default Fav
