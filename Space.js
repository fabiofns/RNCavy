/**
 * Arquivo feito para dar espaco entre componentes na tela e nao desalinhar
 * 
 * @author Fabio Souza
 */
import React, {Component} from 'react';
import {View} from 'react-native';

export default class Space extends Component {

    state = {
        nome: "LOGIN"
    }

    render() {

        return (

            <View style={{height: 20}}></View>
        )
    }
}