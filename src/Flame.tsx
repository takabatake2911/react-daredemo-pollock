import React from 'react';
import styled from 'styled-components';
const DIV = styled.div`
    display: block;
    margin: auto;
    width: 300px;
    height: 300px;
    background-color: transparent;
    position: relative;
    overflow: hidden;
    border: 20px ridge #d6b815;
    border-radius: 10px;
`;

const SEN = styled.img`
    position: absolute;
    display: inline-block;
`;

type Proptypes = {
    linePosArr: {
        top: number;
        left: number;
        rotate: number;
    }[];
};

const Flame = ({ linePosArr }: Proptypes) => {
    return (
        <DIV>
            {linePosArr.map((linePos, index) => {
                return (
                    <SEN
                        key={index}
                        style={{
                            top: `${linePos.top}%`,
                            left: `${linePos.left}%`,
                            transform: `rotateZ(${linePos.rotate}deg)`,
                        }}
                        src="./sen.png"
                    ></SEN>
                );
            })}
        </DIV>
    );
};

export default Flame;
