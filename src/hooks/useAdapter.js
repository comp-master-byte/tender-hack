import React from 'react'
import {useLocation} from 'react-router-dom'

export const useAdapter = () => {
    const {pathname} = useLocation()
    const array = pathname.split("/")
    return array[1]
}