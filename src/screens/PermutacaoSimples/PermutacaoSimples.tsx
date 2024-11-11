import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { Container, Head, ModalContainer, ModalButtonContainer, TextTitle, BoxTextBody, TextBody, TextBtn, ModalContent, BoxElements, ModalButton,
    CloseModal, TextLogo, DisplayForm, TextA, Textnp, TextIgual, Form2, Traco, Textn,
    TextNp, DisplayCalc, Div, TextResult, Tecle, Buttons, TextButton, C } from './styled';
import Modal from 'react-native-modal';
import NavBar from "../../componentes/NavBar/NavBar";

export default function PermutacaoSimples({navigation}: any) {
    const [n, setN] = useState('');
    const [resultado, setResultado] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleButtonPress = (value: string) => {
        if (resultado === '') {
            setN(prevN => prevN + value);
        }
    };

    const handleClearPress = () => {
        setN('');
        setResultado('');
    };

    const handleCalculate = () => {
        try {
            const nNumber = parseFloat(n);
            if (!isNaN(nNumber)) {
                const result = factorial(nNumber);
                setResultado(result.toString().slice(0, 10)); // Limita o resultado a 10 caracteres
            } else {
                setResultado('Error: Número inválido');
            }
        } catch (error) {
            setResultado('Error');
        }
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
                <TextLogo>Fatorial de n</TextLogo>
                <ModalButtonContainer>
                    <ModalButton onPress={() => setModalVisible(true)}>
                        <Image source={require('./img/information.png')} style={{ width: 20, height: 20, padding: 15 }} />
                    </ModalButton>
                </ModalButtonContainer>
            </Head>

            <DisplayForm>
                <TextA>F</TextA>
                <Textnp>{`${n || 'n'}`}</Textnp>
                <TextIgual>=</TextIgual>
                <Form2>
                    <Textn>{n || 'n'}!</Textn>
                </Form2>
            </DisplayForm>

            <Tecle>
                <Text style={{ fontSize: 20, color: 'black', marginBottom: 20, marginTop: 5 }}>Digite o valor de n</Text>
                <Div>
                    {[...Array(10).keys()].map(num => (
                        <Buttons key={num} onPress={() => handleButtonPress(num.toString())}>
                            <TextButton>{num}</TextButton>
                        </Buttons>
                    ))}
                    <Buttons onPress={handleClearPress}>
                        <TextButton>Limpar</TextButton>
                    </Buttons>
                    <Buttons onPress={handleCalculate}>
                        <TextButton style={{ fontSize: 20 }}>Calcular</TextButton>
                    </Buttons>
                </Div>
            </Tecle>
            <DisplayCalc>
                <TextResult> O resultado é: {resultado}</TextResult>
            </DisplayCalc>

            <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
                <ScrollView>
                    <ModalContent>
                        <BoxElements>
                            <TextTitle>Informações</TextTitle>
                            <CloseModal onPress={() => setModalVisible(false)}>
                                <TextBtn>X</TextBtn>
                            </CloseModal>
                        </BoxElements>
                        <BoxTextBody>
                            <TextBody>
                                O fatorial de um número \( n \) é o produto de todos os números inteiros positivos de 1 até \( n \).
                            </TextBody>
                        </BoxTextBody>
                    </ModalContent>
                </ScrollView>
            </Modal>
            <NavBar />
        </C>
    )
}
