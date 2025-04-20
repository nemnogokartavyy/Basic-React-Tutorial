// ⊗jsrtPmSySIS

//1
import React, { useState } from 'react';
import './styles.css';
import { styles } from './styles';

const App = () => {

    return (

        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '25px',
                alignItems: 'center',
                backgroundColor: '#0099ff',
            }}>
                <button style={{
                    marginRight: '25px',
                    backgroundColor: '#ffffff',
                    border: '2px solid #2e4eb6',
                    padding: '10px 25px',
                    borderRadius: '10px',
                    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                    fontWeight: 'bold',
                    color: '#2e4eb6',
                    cursor: 'pointer',
                }}>Click1</button>
                <button style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #2e4eb6',
                    padding: '10px 25px',
                    borderRadius: '10px',
                    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                    fontWeight: 'bold',
                    color: '#2e4eb6',
                    cursor: 'pointer',
                }}>Click1</button>
            </div>
        </>

    );

};

export default App;