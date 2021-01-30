import PropTypes from 'prop-types';

const Clime = ({ result }) => {

    const { name, main } = result

    const kelvin = 273.15   //  Kelvin conversion

    if (!name) return null

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Clime in {name}:</h2>
                <p className='temperatura'>
                    {parseFloat(main.temp - kelvin).toFixed(2)}
                    <span> &#x2103; </span>
                </p>

                <p>Max. Temp:
                {main.temp_max} <span> &#x2103; </span>
                </p>

                <p>Min. Temp:
                {main.temp_min} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Clime.propTypes = {
    result: PropTypes.object.isRequired
}

export default Clime;