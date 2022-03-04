import React, {useEffect, useState} from 'react';
import styles from "../css/tours.module.css";
import {ToursService} from "../service/ToursService";

const ToursContainer = () => {
    const [list, setList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        ToursService.getPlaces()
            .then(res => {
                setList(res);
            })
            .catch(err => {
                console.log(err);
                setList([]);
            })
    }, [refresh]);

    const onRefresh = () => {
        setRefresh(prev => !prev);
    };

    const removeSelectedItem = (name) => {
        const filteredList = list.filter(item => item.name !== name);
        setList(filteredList);
    };

    const toggleShowFullText = (name) => {
        const updatedList = list.map(item => {
            if(item.name === name) {
                return {...item, showFullText: !item.showFullText}
            }
            return item;
        });
        setList(updatedList);
    }

    if(!list?.length || list.length === 0) {
        return (
            <div className={styles.otoSanContainer}>
                <h1 className={styles.heading}>Our Tours</h1>
                <button className={styles.refreshButton} onClick={onRefresh}>Refresh</button>
            </div>
        );
    }

    return (
        <div className={styles.otoSanContainer}>
            <h1 className={styles.heading}>Our Tours</h1>
            {list.map(item => {
                return (
                    <div className={styles.tourCard} key={item.name}>
                        <img className={styles.image} src={item.imageUrl} alt={'avatar'}/>
                        <div style={{padding: 20}}>
                            <div className={styles.tourDetails}>
                                <h4>{item.name}</h4>
                                <p className={styles.price}>
                                    {"$" + item.price}
                                </p>
                            </div>
                            <p style={{color: "gray", fontSize: "small"}}>
                                {item.showFullText ? item.text: item.text.substring(0, 100)+"..."}
                                <span
                                    style={{color: "#44a4ff"}}
                                    onClick={() => toggleShowFullText(item.name)}
                                >
                                    {item.showFullText ? "Show Less": "Read More"}
                                </span>
                            </p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button
                                className={styles.button}
                                onClick={() => removeSelectedItem(item.name)}
                            >
                                Not Interested
                            </button>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
};

export default ToursContainer;