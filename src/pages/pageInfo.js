import React from 'react';
import BlocImage from '../components/BlocImage';
import BlocInfo from '../components/BlocInfo';
import Header from '../components/Header';

const pageInfo = () => {
    return (
        <div>
            <Header />
            <div className='body-area'>
                    <BlocInfo Title1='Pré-requis'  text1="Il vous faudra d'abord télécharger une application de mise en local comme wamp server , LAMP , MAMP ou un équivalent marchera très bien aussi et un gestionnaire de bases de données . On va utiliser PHPmyAdmin pour ce tuto.  " Title2="Création d'une table"  text2="Lorsque que l'on est sur PhpmyAdmin , il nous faudra aller créer notre base de données . Pour ce faire , nous allons donc cliquer sur 'Nouvelle base de données' dans la barre de navigation a droite. Il faut ensuite nommer votre table."/>
                    <BlocImage img="/Assets/img/creationimg.JPG" />
            </div>
            <div className='body-area'>
                    <BlocInfo Title1='Remplir sa table'  text1="Pour remplir ça table, il est important de suivre le type. C'est-à-dire , si l'on choisit du texte, il sera important de le mettre en type 'varchar' et 'int' pour des nombres comme un âge ou un numéro de téléphone. Il ne faut surtout pas oublier d'auto incrémentée l'ID s'il y en a un. " Title2="comprendre le fonctionnement de la table"  text2="Dans un projet, il sera évidemment possible de créer plusieurs tables en appuyant sur 'nouvelle table' dans votre projet dans la navigation. Lorsque que vous avez le nombre de tables souhaiter, vous pouvez remarquer vos champs en cliquant sur une table, il sera donc possible dans la section 'SQL' dans la navigation du haut de pouvoir tester et accéder à la requête. À ce sujet, on va voir ensemble les requêtes les plus utiliser."/>
                    <BlocImage img='./Assets/img/Capture.JPG' />
            </div>
        </div>
    );
};

export default pageInfo;