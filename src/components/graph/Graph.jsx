import React, { useState, useContext, createContext, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import styles from './Graph.module.scss'
import Chart from 'chart.js/auto'
import { Button } from '@mui/material'
import { Kotirovka } from '../../icons/Kotirovka'
import { Aborot } from '../../icons/Aborot'
import { Table } from '../../icons/Table'
import { Calendar } from '../../icons/Calendar'
import { Countdown } from '../../UI/Countdown'
import { useSelector } from 'react-redux'

Chart.register(CategoryScale)

export const Graph = () => {

    const navigate = useNavigate()

    const dataGraph = useSelector(state => state.addGraph.items)
    const [showGraph, setShowGraph] = useState(false)

    console.log(dataGraph)


    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <div>
                            <Link className={styles.link} to='/'>
                                <Button style={{ marginRight: '1rem' }} variant='contained' color='primary'>
                                    Главная
                                </Button>
                            </Link>
                            <Button onClick={() => navigate(-1)} variant='contained' color='primary'>Вернуться к заявке</Button>
                        </div>
                        <div className={styles.titleHeader}>Вы перешли на страницу с графиком</div>
                    </div>
                </header>
                <div className={styles.graphLineLimit}>

                    <div className={styles.sessionFlex}>
                        <div className={styles.graphText}>
                            <div style={{ marginBottom: '1rem' }}>
                                <Button onClick={() => setShowGraph(prev => !prev)} color='info' variant='outlined'>
                                    {!showGraph ? 'Показать график' : 'Скрыть график'}
                                </Button>

                                {showGraph
                                    && <div className={styles.graphLine}>
                                        <Line data={data} />
                                    </div>
                                }
                            </div>
                            <div className={styles.textBlock}>
                                <div className={styles.idStatusHeader}>
                                    <Kotirovka />
                                    <div style={{ marginRight: '2rem', marginLeft: '0.5rem' }}>Котировочная сессия <span className={styles.uniqId}>9298390</span> </div>
                                    <div className={styles.statusData}>
                                        <div className={styles.statusIndicator}></div>
                                        <div className={styles.status}>Проведена</div>
                                    </div>
                                </div>
                                <div className={styles.nameText}>
                                    Утюг
                                </div>

                                <div className={styles.column}>

                                    <div className={styles.row}>
                                        <div className={styles.labelText}>Заказчик</div>
                                        <div className={styles.imgText}>
                                            <Aborot />
                                            <div className={styles.textWarning}>ПАО Ветвь</div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.rowGrow}>
                                            <div >
                                                <div className={styles.labelText}>Размещение в соответствии с законом</div>
                                                <div className={styles.imgText}>
                                                    <Table />
                                                    <div className={styles.textWarning}> 44-ФЗ</div>
                                                </div>
                                            </div>
                                            <div className={styles.anyFlex}>
                                                <div className={styles.labelText}>Основания для заключения</div>
                                                <div className={styles.imgText}>
                                                    <div className={styles.textWarning}>п1 1ч. ст. 93 Закупка у естественного монополиста</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.labelText}>Даты проведения</div>
                                        <div className={styles.imgText}>
                                            <Calendar />
                                            <div className={styles.textWarning}>c 18.04.2022 09:00:00 по 19.04.2022 09:00:00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className={styles.countdownBlock}>
                            <div className={styles.countdownInner}>
                                <Countdown />
                            </div>
                            <div style={{ textAlign: 'center', padding: '1.375rem', width: '60%', margin: '0 auto' }}>Для участия в котировочной сессии необходимо авторизоваться</div>
                            <div className={styles.startedPrice}>
                                <div style={{ textAlign: 'center' }}>
                                    <div className={styles.priceText}>Начальная цена</div>
                                    <div className={styles.price}>200 398,00 ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
