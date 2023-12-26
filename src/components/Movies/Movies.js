import { React, useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../CardList/CardList';

function Movies(props) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [isShort, setIsShort] = useState(localStorage.getItem('localIsShort') === 'true');
    const [searchValue, setSearchValue] = useState(localStorage.getItem('localSearchValue'));

    useEffect(() => {
        searchMovies();
    }, [isShort]);

    function searchMovies() {
        const movies = JSON.parse(localStorage.getItem("movies"));
        if (isShort) {
            const filterMoviesByDuration = movies.filter((movie) => {
                return (movie.duration <= 40)
            })
            setFilterMovies(filterMoviesByDuration);
            setSearchError('');
            if (filterMoviesByDuration.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
        if (searchValue) {
            const filterMoviesByName = movies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                    movie.nameEN.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilterMovies(filterMoviesByName);
            setSearchError('');
            if (filterMoviesByName.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
        if (isShort && searchValue) {
            const filterMoviesByAll = movies.filter((movie) => {
                return (movie.duration <= 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
            });
            setFilterMovies(filterMoviesByAll);
            setSearchError('');
            if (filterMoviesByAll.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
    };

    function handleChangeSearch(e) {
        const value = e.target.value;
        setSearchValue(value);
        localStorage.setItem("localSearchValue", value);
    };
    function handleChek(e) {
        const isShort = e.target.checked;
        setIsShort(isShort);
        localStorage.setItem("localIsShort", isShort);
    };

    return (
        <div className='movies'>
            <main>
                <SearchForm onSearch={searchMovies}
                    searchValue={searchValue}
                    handleChangeSearch={handleChangeSearch}
                    isShort={isShort}
                    handleChek={handleChek}
                    onClickCheckbox={searchMovies} />
                <p className='movies__error'>{props.serverError}{searchError}</p>

                <MoviesCardList
                    movies={filterMovies}
                    handleSavedClick={props.handleSavedClick}
                    savedMovies={props.savedMovies}
                />

            </main>
        </div>
    )
}
export default Movies;