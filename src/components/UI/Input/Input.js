import React from 'react';

import styles from './Input.module.css'

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={styles.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={styles.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('select'):
            inputElement = (
               <select
               className={styles.InputElement}
               value={props.value}>
                  {props.elementConfig.options.map(option => (
                      <option value={option.value}>
                        {option.displayValue}
                      </option>
                  ))}
               </select>
            );
                    break;
        default:
            inputElement = <input
                className={styles.InputElement}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={styles.Input}>
            <lable className={styles.Label}>
                {props.label}
            </lable>
            {inputElement}
        </div>
    );

};

export default input;
