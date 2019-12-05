import React, { Component } from 'react'
import { SearchForm } from './SearchForm'
import {Detail} from './Detail'
import { MovieList } from './MovieList'


export class ResultsHandler extends Component {

    state = { useSearch: false, results: [] }
    _handleResults = (results) => {

        this.setState({ results, useSearch: true })


    }
    _renderResults() {

        return this.state.results.length === 0
            ? <p>Sorry! Results  Not found</p>
            : <MovieList movies={this.state.results} />

    }
    render() {
        const url = new URL(document.location)
        const hasId = url.searchParams.has('id')

    
        if (hasId) {
            return <Detail id={url.searchParams.get('id')}/>
        }
        return (<div>




            <SearchForm onResult={this._handleResults} />
            {

                this.state.useSearch
                    ? this._renderResults()
                    : <small>Use the form to search a movie</small>
            }
        </div>

        )
    }
} 