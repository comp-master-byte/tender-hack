import React from 'react'
import styles from './AppPage.module.scss'
import { NavLink } from 'react-router-dom'
import {
    Button,
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    CardContent,
    CardActions
} from '@mui/material'
import supplier from '../../images/supply.jpg'
import customer from '../../images/customer.jpg'

export const AppPage = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <header className={styles.headerContent}>
                    <div className={styles.mainContent}>
                        <div className={styles.title}>Главная страница и ее данные</div>
                    </div>
                </header>
                <main className={styles.mainContent}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={customer}
                                alt="green iguana"
                                className={styles.cardMedia}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Заказчик
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.link}>
                            <NavLink to='/requisitions'>
                                <Button color='primary' variant='contained'>
                                    Перейти
                                </Button>
                            </NavLink>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={supplier}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Поставщик
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={styles.link}>
                            <NavLink className={styles.link} to='/suppliers'>
                                <Button color='primary' variant='contained'>
                                    Перейти
                                </Button>
                            </NavLink>
                        </CardActions>
                    </Card>
                </main>

            </div>
        </div>
    )
}
