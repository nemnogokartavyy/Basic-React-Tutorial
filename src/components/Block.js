import React from "react";
import styled from 'styled-components';

const Block1 = styled.div`
display: flex;
justify-content: center;
padding: 25px;
align-items: center;
background-color: #0099ff;
`;

const Button1 = styled.button`
background: ${(props) => (props.warn ? 'yellow' : 'green')};
color: ${(props) => (props.warn ? 'red' : 'white')}
`;

const Button2 = styled.button`
background: ${(props) => (props.warn ? 'yellow' : 'green')};
color: ${(props) => (props.warn ? 'red' : 'white')}
`;

const Button3 = styled.button`
background: ${(props) => (props.warn ? 'yellow' : 'green')};
color: ${(props) => (props.warn ? 'red' : 'white')}
`;

function Block() {
    return (
        <Block1>
            <Button1 warn>Click1</Button1>
            <Button2 disabled={true}>Click2</Button2>
            <Button3 type="reset">Click3</Button3>
        </Block1>
    )
}

export default Block;