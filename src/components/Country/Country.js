import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const{name,population,region,flag} = props.country;
    const flagStyle = {height:'100px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={{textAlign:'center'}}>
             <h4 style={{color:'red',fontWeight:'bold'}}>Country Name : {name}</h4>
             <img style={flagStyle} src={flag} alt="" />
             <p>Population : {population}</p>
             <p>Region : {region}</p>
             <button onClick={ ()=> handleAddCountry(props.country)}>Add Country</button>
             <hr />
         
        </div>
    );
};

export default Country;