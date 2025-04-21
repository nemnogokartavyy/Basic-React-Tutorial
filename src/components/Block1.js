import React from "react";
import styled from 'styled-components';

const DIVA = styled.div`
width: 150px;
height: 150px;
background-color: yellow;
border: 2px solid black;
`;

const DIVB = styled(DIVA)`
background-color: green;
border: 3px solid black;
`

function Block1() {
    return <div>
        <DIVA />
        <DIVB />
        <DIVA />
    </div>
}

export default Block1;