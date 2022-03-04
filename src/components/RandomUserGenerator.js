import React, {useEffect, useState} from 'react';
import styles from '../css/randomuser.module.css';
import {RandomUserService} from "../service/RandomUserService";

const RandomUserGenerator = () => {
    const [temp, setTemp] = useState({});
    const [user, setUser] = useState({});
    const [text, setText] = useState("name");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        RandomUserService.getPerson()
            .then(res => {
                setTemp(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const onRefresh = () => {
        setLoading(true);
        RandomUserService.getPerson()
            .then(res => {
                // debugger;
                setTemp(res);
            })
            .catch(err => {
                console.log(err);
                onRefresh();
            })
    };

    return (
        <div className={styles.otoSanContainer}>
            <div className={styles.top} />
            <div className={styles.card}>
                <div className={styles.cardContents}>
                    <div className={styles.cardTop} />
                    <img
                        className={styles.avatar}
                        src={temp.imageUrl}
                        alt='mainContent'
                        onLoad={() => {
                            // debugger;
                            setLoading(false);
                            setUser(temp);
                        }}
                    />
                    <div style={{flex: 0.1}} />
                    <div className={styles.cardTextContainer}>
                        <p style={{color: 'gray', fontSize: 20, margin: 0}}>
                            My {text} is
                        </p>
                        <p style={{fontSize: 30, margin: 0}}>
                            {user[text]}
                        </p>
                    </div>
                    <div className={styles.iconsContainer}>
                        <i
                            className="fa fa-user"
                            id={styles['icon']}
                            aria-hidden="true"
                            onMouseEnter={() => {
                                setText('name')
                            }}
                        />
                        <i
                            className="fa fa-envelope-open"
                            id={styles['icon']}
                            aria-hidden="true"
                            onMouseEnter={() => {
                                setText('email')
                            }}
                        />
                        <i
                            className="fa fa-calendar-check-o"
                            id={styles['icon']}
                            aria-hidden="true"
                            onMouseEnter={() => {
                                setText('age')
                            }}
                        />
                        <i
                            className="fa fa-map-marker"
                            id={styles['icon']}
                            aria-hidden="true"
                            onMouseEnter={() => {
                                setText('address')
                            }}
                        />
                        <i
                            className="fa fa-phone"
                            id={styles['icon']}
                            aria-hidden="true"
                            onMouseEnter={() => {
                                setText('phoneNo')
                            }}
                        />
                        <i
                            className="fa fa-lock"
                            id={styles['icon']}
                            aria-hidden="true"
                            onMouseEnter={() => {
                                setText('password')
                            }}
                        />
                    </div>
                    {loading ?
                        <button className={styles.refreshButton}>
                            Loading...
                        </button>:
                        <button className={styles.refreshButton} onClick={onRefresh}>
                            Refresh
                            &nbsp;
                            <i className="fa fa-refresh" aria-hidden="true" />
                        </button>
                    }
                </div>
            </div>
            <div className={styles.bottom} />
        </div>
    );
};

export default RandomUserGenerator;