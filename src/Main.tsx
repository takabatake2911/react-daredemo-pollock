import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from './Btn';
import Flame from './Flame';

const DIV = styled.div`
    width: 100%;
    height: 800px;
    padding-top: 20px;
`;

interface initialState {
    linePosArr: { top: number; left: number; rotate: number }[];
}

const initialState: initialState = {
    linePosArr: [{ top: 50, left: 50, rotate: 50 }],
};

const Main = () => {
    const [linePosArr, setLinePosArr] = useState(initialState.linePosArr);
    const appendLine = () => {
        const top: number = -20 + Math.random() * 140;
        const left: number = -50 + Math.random() * 140;
        const rotate: number = Math.random() * 360;
        setLinePosArr([...linePosArr, { top, left, rotate }]);
    };

    return (
        <DIV>
            <Flame linePosArr={linePosArr} />
            <Btn appendLine={appendLine} />
        </DIV>
    );
};

export default Main;
