//import styles from './App.module.css'
import './styles/colors.css';
import './styles/index.css';
import { LoginPage, MainPage, AnalyticsPage, NotificationsPage, OrdersPage, SuppliesPage } from '../pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} /> {/*страница входа*/}
        <Route path='/main' element={<MainPage />} /> {/*главная страница*/}
        <Route path='/analytics' element={<AnalyticsPage />} /> {/*страница аналитики*/}
        <Route path='/analytics' element={<NotificationsPage />} /> {/*страница уведомлений*/}
        <Route path='/analytics' element={<OrdersPage />} /> {/*страница заказов*/}
        <Route path='/analytics' element={<SuppliesPage />} /> {/*страница поставок*/}
        <Route path='*' element={<Navigate to='/login' replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
