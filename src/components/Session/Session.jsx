import React from 'react'
import { Calendar } from '../../icons/Calendar'
import { Integration } from '../../icons/Integration'
import { Kotirovka } from '../../icons/Kotirovka'
import { Location } from '../../icons/Location'
import { Table } from '../../icons/Table'
import styles from './Session.module.scss'

export const Session = () => {
    return (
        <div className={styles.session}>
            <div className={styles.container}>
                <main className={styles.sessionContent}>
                    <div className={styles.statusHeader}>
                        <div className={styles.idStatusHeader}>
                            <Kotirovka />
                            <div style={{ marginRight: '2rem', marginLeft: '0.5rem' }}>Котировочная сессия <span className={styles.uniqId}>9298390</span> </div>
                            <div className={styles.statusData}>
                                <div className={styles.statusIndicator}></div>
                                <div className={styles.status}>Активная</div>
                            </div>
                        </div>
                        <div className={styles.priceData}>
                            <div style={{ color: '#c3c3c3' }}>Начальная цена</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#264b82' }}>200 000 ₽</div>
                        </div>
                    </div>

                    <div className={styles.textContentBlock}>
                        <div className={styles.nameText}>
                            РАСХОДНЫЕ МАТЕРИАЛЫ И КОМПЛЕКТУЮЩИЕ ДЛЯ ЛАЗЕРНЫХ ПРИНТЕРОВ И Mфу
                        </div>
                        <div className={styles.dataText}>
                            Государственное бюджетное общеобразовательное учреждение города Москвы «Школа № 870» (ИНН: 7724189441)
                        </div>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <div className={styles.container}>
                        <div className={styles.footerContent}>
                            <div className={styles.locText}>
                                <Location />
                                <div style={{ marginLeft: '5px' }}>г Москва</div>
                            </div>
                            <div className={styles.locText}>
                                <Table />
                                <div style={{ marginLeft: '5px' }}>44-ФЗ</div>
                            </div>
                            <div className={styles.locText}>
                                <Calendar />
                                <div style={{ marginLeft: '5px' }}>с 18.04.2022 до 19.04.2022 09:00 (МСК)</div>
                            </div>
                            <div className={styles.locText}>
                                <Integration />
                                <div style={{ marginLeft: '5px' }}>Интеграция с РИС</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
