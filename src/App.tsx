import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const DIV = styled.div`
    width: 100%;
    max-width: 1500px;
    height: 2000px;
    background-color: #fff;
    margin: 0 auto;
`;

const App = () => {
    return (
        <DIV>
            <Header />
            <Main />
        </DIV>
    );
};

export default App;
