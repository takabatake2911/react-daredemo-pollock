import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #777;
`;

const TITLE = styled.h1`
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 30px;
`;
const Header = () => {
    return (
        <DIV>
            <TITLE>だれでもポロック</TITLE>
        </DIV>
    );
};

export default Header;
