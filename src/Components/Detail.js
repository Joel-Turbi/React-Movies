import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const KEY = '5fd067d2'
export class Detail extends Component {

    state = { movie: {} }
    _fetchMovie({ id }) {


        fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`)
            .then(response => response.json())
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })
            })


    }
    componentDidMount() {

        const { id } = this.props

        this._fetchMovie({ id })

        console.log({ id })
    }

    render() {
        const { Title,Poster,Type,Year } = this.state.movie
     

        return( 
            <Card>
    <Image src={Poster} />
    <Card.Content>
      <Card.Header>{Title}</Card.Header>
      <Card.Meta>{Year}</Card.Meta>
      <Card.Description>
   {     Type}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
 
    </Card.Content>
  </Card>
        )
    }
}