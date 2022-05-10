import React from 'react';
// import styles from '../styles/globals';
import { useStateContext } from '../context/StateContext';

const Calculator = () => {
    const { display, onButtonPress } = useStateContext();


    return (
        <section>
            <div className='container'>
                <div id="display">{display}</div>
                <div className='buttons'>
                    <div id='add' className='button' onClick={() => onButtonPress('+')}>+</div>
                    <div id='sub' className='button' onClick={() => onButtonPress('-')}>-</div>
                    <div id='div' className='button' onClick={() => onButtonPress('/')}>/</div>
                    <div id='mul' className='button' onClick={() => onButtonPress('*')}>*</div>

                    <div id='0' className='button' onClick={() => onButtonPress('0')}>0</div>
                    <div id='1' className='button' onClick={() => onButtonPress('1')}>1</div>
                    <div id='2' className='button' onClick={() => onButtonPress('2')}>2</div>
                    <div id='3' className='button' onClick={() => onButtonPress('3')}>3</div>
                    <div id='4' className='button' onClick={() => onButtonPress('4')}>4</div>
                    <div id='5' className='button' onClick={() => onButtonPress('5')}>5</div>
                    <div id='6' className='button' onClick={() => onButtonPress('6')}>6</div>
                    <div id='7' className='button' onClick={() => onButtonPress('7')}>7</div>
                    <div id='8' className='button' onClick={() => onButtonPress('8')}>8</div>
                    <div id='9' className='button' onClick={() => onButtonPress('9')}>9</div>

                    <div id='clear' className='button' onClick={() => onButtonPress('C')}>C</div>
                    <div id='equal' className='button' onClick={() => onButtonPress('=')}>=</div>
                </div>
            </div>
        </section>
    )
}

export default Calculator