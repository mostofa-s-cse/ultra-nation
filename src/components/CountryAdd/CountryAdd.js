import React from 'react';

const CountryAdd = (props) => {
    const countryadd= props.countryadd;
    // let totalPopulation =0;
    // for (let i = 0; i < countryadd.length; i++) {
    //     const country = countryadd[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = countryadd.reduce((sum,country)=>sum+country.population,0)
    return (
        <div>
            <h3>Country Added : {countryadd.length} </h3>
            <p>Total Population : {totalPopulation} </p>
            <hr />
        </div>
    );
};

export default CountryAdd;