import React, { useState } from 'react'
import Addheroes from './heroes/addHeroes';
import GridHeroes from './heroes/gridHeroes';
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';

export const Search = () => {
    
    const [heroes, setHeroes] = useState(['']);
    
    return (
        <>
            <h2>Marvel Search</h2>
            <Addheroes setHeroes={ setHeroes } />
            <hr/>

            <ol>
            </ol>

        </>
    )
}

export default Search;
