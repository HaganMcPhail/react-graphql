import React from 'react';

const pStyle = {
  marginBottom: '0px'
};

const Country = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.country.name}</h5>
            <h6 className="card-subtitle">
              <span> Native Name: </span>
              <strong>{props.country.native}</strong>
            </h6>
            <p className="card-text" style={pStyle}>
              <span> Currency: </span>
              <strong> {props.country.currency} </strong>
            </p>
            <p className="card-text" style={pStyle}>
              <span> Country Code: </span>
              <strong> {props.country.code} </strong>
            </p>
        </div>
    </div>
);

export default Country;
