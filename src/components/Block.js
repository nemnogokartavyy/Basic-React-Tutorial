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
    // margin-right: 25px;
    // background-color: #ffffff;
    // border: 2px solid #2e4eb6;
    // padding: 10px 25px;
    // border-radius: 10px;
    // font-family: Verdana, Geneva, Tahoma, sans-serif;
    // font-weight: bold;
    // color: #2e4eb6;
    // cursor: pointer;
`;

const Button2 = styled.button`
    // margin-right: 25px;
    // background-color: #ffffff;
    // border: 2px solid #2e4eb6;
    // padding: 10px 25px;
    // border-radius: 10px;
    // font-family: Verdana, Geneva, Tahoma, sans-serif;
    // font-weight: bold;
    // color: #2e4eb6;
    // cursor: pointer;
`;

const Button3 = styled.button`
    // background-color: #ffffff;
    // border: 2px solid #2e4eb6;
    // padding: 10px 25px;
    // border-radius: 10px;
    // font-family: Verdana, Geneva, Tahoma, sans-serif;
    // font-weight: bold;
    // color: #2e4eb6;
    // cursor: pointer;
`;

function Block() {
    return (
        <Block1>
            <Button1>Click1</Button1>
            <Button2 disabled={true}>Click2</Button2>
            <Button3 type="reset">Click3</Button3>
        </Block1>
    )
}

export default Block;