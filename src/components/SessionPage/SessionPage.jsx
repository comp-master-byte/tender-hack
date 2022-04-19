import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import styles from './SessionPage.module.scss'
import { Countdown } from '../../UI/Countdown'
import { Kotirovka } from '../../icons/Kotirovka'
import { Aborot } from '../../icons/Aborot'
import { Table } from '../../icons/Table'
import { Calendar } from '../../icons/Calendar'

Chart.register(CategoryScale)

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

export const SessionPage = () => {

    const navigate = useNavigate()
    const [showGraph, setShowGraph] = useState(false)


    return (
        <div className={styles.session}>
            <header style={{ borderBottom: '1px solid #c3c3c3', paddingBottom: '1rem' }}>
                <div className={styles.container}>
                    <div>
                        <Button style={{ marginRight: '1rem' }} onClick={() => navigate('/')} variant='contained' color='primary'>Главная</Button>
                        <Button onClick={() => navigate(-1)} variant='contained' color='primary'>Назад</Button>
                    </div>
                </div>
            </header>
            <main className={styles.mainContent}>
                <div className={styles.container}>
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
                                        <div className={styles.status}>Активная</div>
                                    </div>
                                </div>
                                <div className={styles.nameText}>
                                    РАСХОДНЫЕ МАТЕРИАЛЫ И КОМПЛЕКТУЮЩИЕ ДЛЯ ЛАЗЕРНЫХ ПРИНТЕРОВ И Mфу
                                </div>

                                <div className={styles.column}>
                                    <div className={styles.row}>
                                        <div className={styles.labelText}>Условия исполнения контракта</div>
                                        <div className={styles.imgText}>
                                            <div className={styles.textWarningE}>Обязательное электронное исполнение с использованием УПД</div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.labelText}>Заказчик</div>
                                        <div className={styles.imgText}>
                                            <Aborot />
                                            <div className={styles.textWarning}>Государственное бюджетное общеобразовательное учреждение города Москвы «Школа № 870»</div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <div className={styles.labelText}>Заключение происходит в соответствии с законом</div>
                                        <div className={styles.imgText}>
                                            <Table />
                                            <div className={styles.textWarning}> 44-ФЗ</div>
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
            </main>
        </div>
    )
}
