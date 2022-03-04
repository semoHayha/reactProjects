import React, {useEffect, useState} from 'react';
import styles from './../css/birthday.module.css';
import {BirthdayService} from "../service/BirthdayService";

const BirthdayReminder = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        BirthdayService.getPeople()
            .then(res => {
                setList(res);
            })
            .catch(err => {
                setList([]);
            })
    }, []);

    const clearAll = () => {
        setList([]);
    };

    return (
        <div className={styles.otoSanContainer}>
            <div className={styles.container}>
                <h3>{list.length + " birthdays today!"}</h3>
                <div>
                    {list.map(
                        item => {
                            return (
                                <div style={{display: 'flex', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', padding: 10, borderRadius: 10, margin: "0 0 24px 0"}} key={item.name}>
                                    <img className={styles.avatar} src={item.imageUrl} alt={'avatar'}/>
                                    <div className={styles.detailContainer}>
                                        <p className={styles.name}>{item.name}</p>
                                        <p className={styles.age}>{item.age + " years"}</p>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                <div>
                    <button className={styles.button} onClick={clearAll}>Clear All</button>
                </div>
            </div>
        </div>
    );
};

export default BirthdayReminder;