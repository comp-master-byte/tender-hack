import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import styles from './Requisitions.module.scss'
import { Requisition } from '../requisition/Requisition.jsx'

export const Requisitions = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header>
                    <div className={styles.btnMargin}>
                        <Button onClick={() => navigate(-1)} variant='contained' color='primary'>Главная</Button>
                    </div>
                </header>
                <div className={styles.wrapperRequisitions}>
                    <Requisition />
                </div>
            </div>
        </div>
    )
}
