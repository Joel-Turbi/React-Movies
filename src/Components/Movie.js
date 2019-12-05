import React, { Component } from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

import '../App.css'
export class Movie extends Component {
   state={color: 'black'} 
   _efectColorOn=()=> {

    this.setState({color:'teal'})
   }
   _efectColorOf=()=> {

    this.setState({color:'black'})
   }
    render() {

        const { title, poster, year, id } = this.props
        return (
            <a  onMouseOver={this._efectColorOn} onMouseOut={this._efectColorOf}  href={`?id=${id}`}>
             
            
             <Card color ={this.state.color}>
                    <Image  src={poster} rounded/>
                    {/* <Card.Content>
                        <Card.Header>{title}</Card.Header>
                        <Card.Meta>{year}</Card.Meta>

                    </Card.Content>
                    <Card.Content extra>

                    </Card.Content> */}
             
             </Card>
            </a>
           
      
        )
    }
}