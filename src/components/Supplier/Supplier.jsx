import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@mui/material'
import styles from './Supplier.module.scss'
import { Session } from '../Session/Session'
import { useAdapter } from '../../hooks/useAdapter'

export const Supplier = () => {

    const urlAdapter = useAdapter()
    const navigate = useNavigate()

    return (
        <div className={styles.wrapper}>
            <header>
                <div className={styles.container}>
                    <Button onClick={() => navigate(-1)} variant='contained' color='primary'>Главная</Button>
                </div>
            </header>
            <main className={styles.supplierContent}>
                <div className={styles.container}>
                    <div className={styles.title}>Список котировачных сессий</div>
                    <div className={styles.listSupplies}>
                        <Link style={{ textDecoration: 'none' }} to={`/${urlAdapter}/1`}>
                            <Session />
                        </Link>
                    </div>
                </div>
            </main>
        </div>

    )
}
