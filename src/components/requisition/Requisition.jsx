import React, { useState, useEffect, createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Requisition.module.scss'
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useAdapter } from '../../hooks/useAdapter'
import axios from 'axios'
import { addDataGraph, addExtraField } from '../../redux/actions/actions'

export const Requisition = () => {

    const dispatch = useDispatch()
    const extraField = useSelector(state => state.fields.fields)

    const navigate = useNavigate()
    const urlAdapter = useAdapter()


    const [typeArray, setTypeArray] = useState([
        { id: 1, title: 'Тип классификатора:', name: 'Портал поставищиков' },
        { id: 2, title: 'Наименование закупки:', name: 'Закупка' },
        { id: 3, title: 'Адрес поставки:', name: 'Адрес поставки' },
    ])

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [inputField, setInputField] = useState({
        step_percent: '',
        duration: '',
        start_cost: '',
        auctionRegion: '',
    })

    const addExtraFieldHandler = (field) => {
        const newField = {
            id: Date.now(), field
        }
        dispatch(addExtraField(newField))
    }

    useEffect(() => {
        handleCategories()
    }, [])

    const handleCategories = async () => {
        const response = await axios.get('http://37.140.197.251:5000/categories')
        setCategories(response.data)
    }

    const submitHandler = async () => {
        const serverData = {
            step_percent: inputField.step_percent,
            duration: inputField.duration,
            start_cost: inputField.start_cost,
            auctionRegion: inputField.auctionRegion,
            category: selectedCategory
        }
        const serverRepos = await axios.post('http://37.140.197.251:5000/auction', serverData)

        dispatch(addDataGraph(serverRepos.data._id))
        navigate(`/${urlAdapter}/graph`)
    }


    return (
        <>
            <div className={styles.outWrapper}>
                <div className={styles.techExe}>
                    <div></div>
                    <div className={styles.techExeInner}>
                        <div className={styles.titleExtraBlock}>
                            <div className={styles.extraTitle}>Дополнительные параметры</div>
                        </div>

                        {extraField.map(field => (
                            <div key={field.id} className={styles.extraFields}>
                                <TextField
                                    value={field.name}
                                    // onChange={event => setExtraField(event.target.value)}
                                    label='Текстовое поле'
                                    style={{ marginRight: '1rem' }} />
                                <TextField
                                    value={field.name}
                                    // onChange={event => setExtraField(event.target.value)}
                                    label='Числовое поле'
                                    type='number' />
                            </div>
                        ))}

                        <div className={styles.containerExtra} >
                            <AiOutlinePlusCircle onClick={() => addExtraFieldHandler()} className={styles.iconPlus} />
                        </div>
                    </div>
                </div>
                <div className={styles.requisition}>
                    <div className={styles.container}>
                        <div>
                            <div className={styles.title}>Форма заявки</div>
                            <div className={styles.mainContent}>
                                {typeArray.map(classification => {
                                    return (
                                        <div key={classification.id} className={styles.row}>
                                            <div className={styles.rowTitle}>{classification.title}</div>
                                            <div className={styles.rowContent}>{classification.name}</div>
                                        </div>
                                    )
                                })}
                                <div className={styles.row}>
                                    <div className={styles.rowTitle}>Регион:</div>
                                    <FormControl style={{ width: '14rem' }}>
                                        <InputLabel id="demo-simple-select-label">Регион:</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={inputField.auctionRegion}
                                            label="Регион"
                                            onChange={event => setInputField({ ...inputField, auctionRegion: event.target.value })}
                                        >
                                            <MenuItem value={'Москва'}>Москва</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.rowTitle}>Категории:</div>
                                    <FormControl style={{ width: '14rem' }}>
                                        <InputLabel id="demo-simple-select-label">Категории:</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Категории"
                                            value={selectedCategory}
                                            onChange={event => setSelectedCategory(event.target.value)}
                                        >
                                            {categories.map(category => {
                                                return <MenuItem value={category}>{category}</MenuItem>
                                            })}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.rowTitle}>Стартовая цена:</div>
                                    <TextField
                                        value={inputField.start_cost}
                                        onChange={event => setInputField({ ...inputField, start_cost: event.target.value })}
                                        type='number'
                                        label='Стартовая цена' />
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.rowTitle}>Время проведения котировочной сессии:</div>
                                    <FormControl style={{ width: '14rem' }}>
                                        <InputLabel id="demo-simple-select-label">Часы</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={inputField.duration}
                                            label="Часы"
                                            onChange={event => setInputField({ ...inputField, duration: event.target.value })}
                                        >
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={24}>24</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.rowTitle}>Шаг кс:</div>
                                    <TextField
                                        value={inputField.step_percent}
                                        onChange={event => setInputField({ ...inputField, step_percent: event.target.value })}
                                        type='number'
                                        label='Шаг кс (%)' />
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.rowTitle}>Закон, в соответсвии с которым будет размещена КС: </div>
                                    <div className={styles.rowContent}>44-ФЗ</div>
                                </div>
                            </div>
                        </div>
                        <footer className={styles.innerContainer}>
                            <div className={styles.btnContainer}>
                                <Button onClick={submitHandler} color='success' variant='contained'>Принять</Button>
                            </div>
                        </footer>
                    </div>
                </div>
            </div >
        </>
    )
}