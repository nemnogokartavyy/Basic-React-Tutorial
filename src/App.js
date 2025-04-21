// ⊗jsrtPmSySIS

//1
import React, { useState } from 'react';
import './styles.css';
import { styles } from './styles';

const App = () => {

    const bDisplay = 'flex';
    const bJustifyContent = 'center';
    const bPadding = '25px';
    const bAlignItems = 'center';
    const bBackgroundColor = '#0099ff';

    const buttonMarginRight = '25px';
    const buttonBackgroundColor = '#ffffff';
    const buttonBorder = '2px solid #2e4eb6';
    const buttonPadding = '10px 25px';
    const buttonBorderRadius = '10px';
    const buttonFontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
    const buttonFontWeight = 'bold';
    const buttonColor = '#2e4eb6';
    const buttonCursor = 'pointer';

    return (

        <>
            <div style={{
                display: bDisplay,
                justifyContent: bJustifyContent,
                padding: bPadding,
                alignItems: bAlignItems,
                backgroundColor: bBackgroundColor,
            }}>
                <button style={{
                    marginRight: buttonMarginRight,
                    backgroundColor: buttonBackgroundColor,
                    border: buttonBorder,
                    padding: buttonPadding,
                    borderRadius: buttonBorderRadius,
                    fontFamily: buttonFontFamily,
                    fontWeight: buttonFontWeight,
                    color: buttonColor,
                    cursor: buttonCursor,
                }}>Click1</button>
                <button style={{
                    backgroundColor: buttonBackgroundColor,
                    border: buttonBorder,
                    padding: buttonPadding,
                    borderRadius: buttonBorderRadius,
                    fontFamily: buttonFontFamily,
                    fontWeight: buttonFontWeight,
                    color: buttonColor,
                    cursor: buttonCursor,
                }}>Click1</button>
            </div>
        </>

    );

};

export default App;