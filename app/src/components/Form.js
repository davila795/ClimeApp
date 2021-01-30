import React, { useState } from 'react';

const Form = ({ search, setSearch, setConsult }) => {


    const { country, city } = search

    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (country.trim() === "" || city.trim() === "") {
            setError(true)
            return
        }

        setError(false)
        setConsult(true)

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error && <p className='red darken-4 error'>Incompleted field</p>}

            <div className='input-field col s12'>
                <select
                    name='country'
                    id='country'
                    value={country}
                    onChange={handleChange}
                >
                    <option value=''>--Select Country--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='country'>Country:</label>
            </div>

            <div className='input-field col s12'>
                <input
                    type='text'
                    name='city'
                    id='city'
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor='city'>City:</label>
            </div>

            <div className='input-field col s12'>
                <input
                    type='submit'
                    value='Search'
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

export default Form;