import React, {createContext, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import {AppPage} from './components/app/AppPage.jsx'
import { Requisitions } from './components/Requisitions/Requisitions.jsx'
import {Graph} from './components/graph/Graph.jsx'
import './styles/global.scss'
import { Supplier } from './components/Supplier/Supplier.jsx'
import { SessionPage } from './components/SessionPage/SessionPage.jsx'


function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AppPage />} />
            <Route path='/requisitions' element={<Requisitions />} />
            <Route path='/requisitions/graph' element={<Graph />} />
            <Route path='/suppliers' element={<Supplier />} />
            <Route path='/suppliers/:id' element={<SessionPage/>} />
        </Routes>
    </div>
  );
}

export default App;
