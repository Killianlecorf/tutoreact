import React from 'react';
import BlocImage from '../components/BlocImage';
import BlocInfo from '../components/BlocInfo';
import Header from '../components/Header';

const ReadPage = () => {
    return (
        <div>
            <Header />
            <div className='body-area'>
                    <BlocInfo Title1='Requête'  text1="Après avoir réussi à ajouter des éléments dans votre base de données , vous voulez maintenant l'afficher. Pour cela, on va utiliser la commande SELECT * FROM '(le nom de votre table) . La petite étoile signifie que vous souhaitez sélectionner toute la table. " Title2="Requête sous condition"  text2="Afin de préciser ce que l'on veut afficher, des commandes sont mis à notre disposition pour filtrer nos recherches. Ils seront toujours placés après le nom de votre table. Je vais donc vous donner quelques-unes de ces commandes, WHERE 'ID' = 5 permet par exemple de n'afficher que la ligne où l'ID est 5. ORDER BY 'id' permet de filtrer par ordre des Ids ou bien LIMIT 5 qui permet d'afficher que les 5 dernières lignes. Je vous conseille donc de tous les apprendre . "/>
                    <BlocImage img='../Assets/img/creationimg.JPG' />
            </div>
        </div>
    );
};

export default ReadPage;