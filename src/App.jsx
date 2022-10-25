import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
import Shop from './components/shop/shop';
import Constacts from './components/contacts/constacts';
import AboutUs from './components/aboutUs/aboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>Домашняя страница</Route>
            <Route path="/shop" element={<Shop />}>Ассортимент</Route>
            <Route path="/aboutus" element={<AboutUs />}>О Нас</Route>
            <Route path="/contacts" element={<Constacts />}>Контакты</Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

// https://www.figma.com/file/mcuZNoezbhzFYEEOMWReOk/Online-store-website-(Community)?node-id=0%3A1
// https://www.flickr.com
// https://www.awwwards.com

// https://www.vantajs.com/?effect=fog
// https://scrollrevealjs.org/guide/hello-world.html

//Построить Е-коммерс сайт у который состоит из : 
// 1. Главна страница , на которой расположены : 
// - Постер 
// - 12 самых “ходовых” товаров 
// - Шапка сайта с навигацией и поисковиком , лого
// - Контент - товары 

// Товар вклчает в себя : 
// - Оценку / Рейтинг
// - Описание 
// - Изображение
// - Конпку купить + Добавить в избранное 

//  Товаров на странице по 12 штук : 
// - Должна быть реализована “Пагинация” 

// Каждый товар кликабелен , страница состоит из : 
// - Описание , изображения , х-ки и остальное барахло 

// На сайте можно : 
// - Зарегестрироваться 
// - Залогиниться 
// К регистрации и логину должны прописаться требования к примеру : 
//   ————— Не меньше 5-ти символов и тд/тп 
// - Добавить товар в корзину / Удалить товар из корзины