import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { Container, Head, ModalContainer, ModalButtonContainer, ModalContent, ModalButton, CloseModal, TextLogo, DisplayForm, TextA, Textnp, TextIgual, Form2, Traco, Textn, TextNp, DisplayCalc, Div, TextResult, Tecle, Buttons, TextButton, C } from './styled';
import Modal from 'react-native-modal';
import NavBar from '../../componentes/NavBar/NavBar';

import './img/information.png'

export default function Combinacao({navigation}: any) {
    const [n, setN] = useState('');
    const [p, setP] = useState('');
    const [resultado, setResultado] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isTypingN, setIsTypingN] = useState(true);

    const handleButtonPress = (value: string) => {
        if (resultado === '') {
            if (isTypingN) {
                setN(prevN => prevN + value);
            } else {
                setP(prevP => prevP + value);
            }
        }
    };

    const handleClearPress = () => {
        setN('');
        setP('');
        setResultado('');
        setIsTypingN(true);
    };

    const handleCalculate = () => {
        if (isTypingN) {
            setIsTypingN(false);
        } else {
            try {
                const nNumber = parseFloat(n);
                const pNumber = parseFloat(p);
                if (!isNaN(nNumber) && !isNaN(pNumber)) {
                    const result = combinacao(nNumber, pNumber);
                    setResultado(result.toString());
                } else {
                    setResultado('Error: Número inválido');
                }
            } catch (error) {
                setResultado('Error');
            }
        }
    };

    const combinacao = (n: number, p: number): number => {
        if (n < p){
            Alert.alert('O n não pode ser menor que p!')
        }
        return factorial(n) / (factorial(p) * factorial(n - p));
    };

    const factorial = (num: number): number => {
        if (num <= 1) {
            return 1;
        }
        return num * factorial(num - 1);
    };

    return (
        <C>
            <Head>
                <TextLogo>Combinação</TextLogo>
                <ModalButtonContainer>
                <ModalButton onPress={() => setModalVisible(true)}>
                <Image source={require('./img/information.png')} style={{ width: 20, height: 20, padding: 15
                     
                 }} />
                </ModalButton>
            </ModalButtonContainer>
            </Head>

            <DisplayForm>
                <TextA>C</TextA>
                <Textnp>{`${n || 'n'} ${p || 'p'}`}</Textnp>
                <TextIgual>=</TextIgual>

                <Form2>
                    <Textn>{n || 'n'}!</Textn>
                    <Traco></Traco>
                    <TextNp>{` ${p || 'p'}! (${n || 'n'} - ${p || 'p'})!`}</TextNp>
                </Form2>
            </DisplayForm>

            <DisplayCalc>
                <TextResult> O resultado é: {resultado}</TextResult>
            </DisplayCalc>

            <Tecle>
                <Div>
                    {[...Array(10).keys()].map(num => (
                        <Buttons key={num} onPress={() => handleButtonPress(num.toString())}>
                            <TextButton>{num}</TextButton>
                        </Buttons>
                    ))}
                    
                    <Buttons onPress={handleClearPress}>
                        <TextButton>Clear</TextButton>
                    </Buttons>
                    <Buttons onPress={handleCalculate}>
                        <TextButton>{isTypingN ? 'OK' : 'Calcular'}</TextButton>
                    </Buttons>
                    <Text style = {{fontSize:30}}>Digite o valor de {isTypingN ? 'n' : 'p'}</Text> 
                </Div>
            </Tecle>

            <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)} style = {{alignItems: 'center'}}>
                <ModalContent>
                    <Text>Seu conteúdo modal aqui</Text>
                    <CloseModal onPress={() => setModalVisible(false)}>
                    <Text>Fechar</Text>
                    </CloseModal>
                </ModalContent>
            </Modal>
            <NavBar />
            


        </C>
    )
}

