import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './like';

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(mv => {
      return movie._id !== mv._id;
    });
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    console.log('asdf');

    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies } = this.state;
    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        Showing {count} movies in the Database.
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Fav</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => {
                        this.handleLike(movie);
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className='btn btn-danger'
                      onClick={() => {
                        this.handleDelete(movie);
                        console.log('clicked');
                      }}
                    >
                      Delete
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
