import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';

function Main() {
    return (
        <main className='main__container'>
            <SearchForm />
            <CardList />
        </main>
    )
}
export default Main;
