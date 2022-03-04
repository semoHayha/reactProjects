import React, {useState} from 'react';
import styles from '../css/randomtext.module.css';
import {RandomTextService} from "../service/RandomTextService";

const RandomTextGenerator = () => {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    const getRandomText = () => {
        let countCopy;

        if(count < 0) {
            countCopy = 0;
        } else if(count > 10) {
            countCopy = 10;
        } else {
            countCopy = count;
        }

        RandomTextService.getRandomText(countCopy)
            .then(res => {
                setText(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onInputChange = (e) => {
        setCount(parseInt(e.target.value) || 0);
    };

    return (
        <div className={styles.otoSanContainer}>
            <h2>Random text</h2>
            <div className={styles.formContainer} style={{}}>
                <label htmlFor={'whatever'}>
                    Paragraphs: &nbsp;
                    <input id={'whatever'} onChange={onInputChange} type={'number'} min={0}/>
                </label>

                <button onClick={getRandomText}>GENERATE</button>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default RandomTextGenerator;