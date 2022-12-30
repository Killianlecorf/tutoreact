import React from 'react';
import BlocImage from '../components/BlocImage';
import BlocInfo from '../components/BlocInfo';
import Header from '../components/Header';

const UpdatePage = () => {
    return (
        <div>
            <Header />
            <div className='body-area'>
                    <BlocInfo Title1='Modification de la base de donnée'  text1="Pour pouvoir modifier les éléments de votre base de données, vous devez d'abord connaître la ligne que vous devez modifier, sinon vous modifierai toutes les lignes en même temps. Pour ce faire l'on va utiliser une commande que l'on a vu toute a l'heure pour sélectionner 1 ligne grâce à sont ID ." Title2="Composition de la requête"  text2="On va décomposer ensemble l'étendue de la requête , UPDATE `(Nom de la table)` SET `(premiere clé)`='[value-1]',`(deuxieme clé)`='[value-2]',`(troisieme clé)`='[value-3]' , (etc...) WHERE 'id'= (l'ID de la ligne que vous voudrez vodifier) "/>
                    <BlocImage img='../Assets/img/creationimg.JPG' />
            </div>
        </div>
    );
};

export default UpdatePage;