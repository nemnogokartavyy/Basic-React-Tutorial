// ⊗jsrtPmSyOTS

//1
import React, { useState } from 'react';
import './styles.css';
const App = () => {

    const block = {
        display: 'flex',
        justifyContent: 'center',
        padding: '25px',
        alignItems: 'center',
        backgroundColor: '#0099ff',
    }

    const btn1 = {
        marginRight: '25px',
        backgroundColor: '#ffffff',
        border: '2px solid #2e4eb6',
        padding: '10px 25px',
        borderRadius: '10px',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        fontWeight: 'bold',
        color: '#2e4eb6',
        cursor: 'pointer',
    }

    const btn2 = {
        backgroundColor: '#ffffff',
        border: '2px solid #2e4eb6',
        padding: '10px 25px',
        borderRadius: '10px',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        fontWeight: 'bold',
        color: '#2e4eb6',
        cursor: 'pointer',
    }

    return (

        <>
            <div style={block}>
                <button style={btn1}>Click1</button>
                <button style={btn2}>Click1</button>
            </div>
        </>

    );

};

export default App;