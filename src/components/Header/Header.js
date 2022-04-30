import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.item}>SocialNetwork</div>
            <img src='https://images.wallpaperscraft.ru/image/single/medved_risunok_zhivotnoe_87247_1280x1280.jpg'/>
        </header>
    );
}

export default Header;