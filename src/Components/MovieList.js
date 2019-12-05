import React, { Component } from 'react'
import { Movie } from './Movie'
export class MovieList extends Component {



    render() {

        const { movies } = this.props
       
        return (
           
            <div className='MoviesList'> 
 
                {movies.map((mov,index) => {
                    console.log(index)
                    if (mov.Poster != "N/A" ) {
                       
                        return (
                               
                            <div key={mov.imdbID} className='MoviesList-item'>
                                {<Movie
                                    id={mov.imdbID}
                                    title={mov.Title}
                                    year={mov.Year}
                                    poster={mov.Poster}
                                />}
                            </div>

                        )
                                
                                    
                                
                    }
                })}
            </div>




        )
    }
}