import React, { useState } from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const Form = ({ search, setSearch, setConsult, setNoResultsError, setResult }) => {

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

        const resetClime = () => {
            setResult({})
            setNoResultsError(false)
        }

        if (country.trim() === "" || city.trim() === "") {
            resetClime()
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
            {error && <Error message='Incompleted field' />}

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

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setConsult: PropTypes.func.isRequired,
    setNoResultsError: PropTypes.func.isRequired,
    setResult: PropTypes.func.isRequired
}

export default Form;