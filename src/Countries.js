import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Country from './Country';

const Countries = () => (
    <Query query={gql`
        {
          countries {
            name
            native
            currency
            code
          }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;

            return data.countries.map((country) => (
                <Country country={country} />
            ));
        }}
    </Query>
);

export default Countries;
