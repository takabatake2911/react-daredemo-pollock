import React from 'react';
import styled from 'styled-components';

const DIV = styled.button`
    display: block;
    margin: 50px auto;
    padding: 20px 40px;
    background-color: white;
    position: relative;
    overflow: hidden;
    background-color: #777;
    border-radius: 10px;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    border: none;

    &:hover {
        background-color: #fff;
        border: 2px solid #777;
        color: #777;
    }
`;
type Proptypes = {
    appendLine: () => void;
};
const Btn = ({ appendLine }: Proptypes) => {
    return <DIV onClick={appendLine}>クリック！</DIV>;
};

export default Btn;
