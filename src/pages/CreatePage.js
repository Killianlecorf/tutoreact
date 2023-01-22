import React from 'react';
import BlocImage from '../components/BlocImage';
import BlocInfo from '../components/BlocInfo';
import Header from '../components/Header';

const CreatePage = () => {
    return (
        <div>
            <Header />
            <div className='body-area'>
                    <BlocInfo Title1='Ajouter dans une base de donnée'  text1="Une fois votre base de donnée créer , vous aimeriez que on puisse ajouter directement dans la base de donnée. Par exemple : vous créer un formulaire de contect et vous aimeriez que les messagess'ajoute directement dans votre base de donnée . Je vais donc vous montrer comment inseré des informations dedans .  " Title2="requête INSERT"  text2="Maintenant, vous devrez aller dans la catégorie 'SQL' dans le haut de votre navigation. Vous allez taper la commande ' INSERT INTO (Le nom de votre table) ( (LE nom de votre premiere clé) , (le nom de votre deuxieme) , (etc..)) VALUES (('[value-1]','[value-2]','[etc...')) '. Attention de bien avoir le meme nombre de 'clé' que de 'valeur'  "/>
                    <BlocImage img="/Assets/img/CaptureInsert.jpg" />
            </div>
        </div>
    );
};

export default CreatePage;