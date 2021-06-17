import React, { useState } from 'react'
import PropTypes from 'prop-types';
import getHeroes from './gridHeroes';

export const Addheroes = ({setHeroes}) => {
    
    const [inputValue, setInputValue] = useState(''); // ''
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
        console.log(e.target.value)
        getHeroes(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setHeroes( heroe => [ inputValue, ...heroe ] );
            setInputValue('');
        }
        

    }


    return (
        <div>
           <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form> 

        </div>
    )
}

Addheroes.propTypes = {
    setHeroes: PropTypes.func.isRequired
}

export default Addheroes;