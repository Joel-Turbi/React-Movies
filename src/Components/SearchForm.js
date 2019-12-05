import React, { Component } from 'react'
import { Input,Icon } from 'semantic-ui-react'
const KEY = '5fd067d2'
export class SearchForm extends Component {

    state = { inputMovie: 'naruto' }


    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })

    }
    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${inputMovie}`)
            .then(response => response.json())
            .then(data => {
                console.log({ data })
                const { Search = [], totalResults = '0' } = data

                this.props.onResult(Search)
            })

    }

    componentDidMount() {
    
     
        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${inputMovie}`)
            .then(response => response.json())
            .then(data => {
                console.log({ data })
                const { Search = [], totalResults = '0' } = data

                this.props.onResult(Search)
            })
    }
    render() {
        return (

            <form onSubmit={this._handleSubmit}>

                <Input
                 icon={<Icon name='search' inverted circular link color='teal'/>}
                    // action={{
                    //     icon: 'search',
                    //   ,

                    // }}
                    placeholder='Search Movies...'
                    onChange={this._handleChange}
                />
            </form>
        )

    }

}

