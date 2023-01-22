import React from 'react';
import BlocImage from '../components/BlocImage';
import BlocInfo from '../components/BlocInfo';
import Header from '../components/Header';

const DeletePage = () => {
    return (
        <div>
            <Header />
            <div className='body-area'>
                    <BlocInfo Title1='Supprimer des élements'  text1="Nous arrivons bientôt à la fin de notre tutoriel , donc pour finir je vais vous montrer une dernière commande qui va vous permettre de supprimer des lignes de votre base de données . La commande est : DELETE FROM '(nom de votre table)' WHERE (la ligne que vous voudriez supprimer) " Title2="Utilisation des requêtes"  text2="Voilà, après avoir vu les principales commandes de base de données qui vous permette de CRUD (Create Read Update Delete ) . C'est à vous de jouer est les manipuler dans vos différents projets personnels afin de vous entraîner. . ;) "/>
                    <BlocImage img='/Assets/img/CaptureDelete.jpg' />
            </div>
        </div>
    );
};

export default DeletePage;