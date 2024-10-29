import React, { useState, useEffect} from "react";
import { View, Text, TextInput } from "react-native";
import { Container, Head, ModalButton, TextLogo, DisplayForm, TextA, BoxNQE, TextIgual, Form2, Traco, Textn, 
        TextQE, DisplayCalc, Div, TextResult, Tecle, TextBn, BoxBtn, Buttons, TextButton, C } from './styles';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import NavBar from '../../componentes/NavBar/NavBar';

export default function PermutacaoSimples({navigation}: any) {
    const [n, setN] = useState('');  // Estado para armazenar n
    const [p, setP] = useState('');  // Estado para armazenar p
    const [resultado, setResultado] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalQuantidadeDeElementos, setmodalQuantidadeDeElementosVisible] = useState<boolean>(true);
    const [quantidadeDeElementos, setQuantidadeDeElementos] = useState<string>("");
    const [array, setArray] = useState<any[]>([]);
    const [isTypingN, setIsTypingN] = useState(true);  // Alterna entre n e p
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                SplashScreen.preventAutoHideAsync(); // Impede que a splash screen feche automaticamente
                await Font.loadAsync({
                    Roboto: require('../../ImageApp/Roboto/Roboto-Regular.ttf'), // Certifique-se de que o caminho está correto
                });
                setFontsLoaded(true);
            } catch (error) {
                console.warn("Erro ao carregar fontes: ", error);
            } finally {
                SplashScreen.hideAsync(); // Esconde a splash screen quando as fontes terminam de carregar
            }
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null; // Retorne nulo enquanto a splash screen estiver ativa
    }
    
    const handleInputChange = (value: string) => {
        if (isTypingN) {
            setN(value);  // Atualiza n quando isTypingN for true
        } else {
            setP(value);  // Atualiza p quando isTypingN for false
        }
    };

    const addQuantidadeDeElementos = () => {
        const numElements = parseInt(quantidadeDeElementos);
        if (isNaN(numElements)) return;
        
        const newArray = [...array, numElements];
        setArray(newArray);
        setQuantidadeDeElementos("");
    };

    const irParaCalculadora = () => {
        addQuantidadeDeElementos();
        setmodalQuantidadeDeElementosVisible(false);
    };

    const handleClearPress = () => {
        setN('');
        setP('');
        setResultado('');
        setIsTypingN(true);
        setArray([]);
    };

    const handleCalculate = () => {
        if (!n || array.length === 0) {
            setResultado('Por favor, insira um valor para n e os elementos repetidos.');
            return;
        }
    
        try {
            // Calcula o fatorial de n
            const numerador = factorial(parseInt(n));
    
            // Calcula o produto dos fatoriais dos elementos repetidos em array
            const denominador = array.reduce((acc, curr) => acc * factorial(curr), 1);
    
            // Divide o fatorial de n pelo produto dos fatoriais dos elementos repetidos
            const result = numerador / denominador;
            setResultado(result.toString());
        } catch (error) {
            setResultado('Erro no cálculo');
        }
    };
    
    const addValue = () => {
        const value = parseInt(quantidadeDeElementos);
        if (isNaN(value)) return;

        if (!n) {
            setN(value.toString()); // Define `n` com o primeiro valor inserido
        } else {
            setArray((prevArray) => [...prevArray, value]); // Adiciona os valores subsequentes ao array
        }

        setQuantidadeDeElementos(''); // Reseta o input
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
                <TextLogo>Permutacao Simples</TextLogo>
            </Head>

            <DisplayForm>
                <TextA>P</TextA>

                {/* Exibir o valor atual de n ou p com base no estado */}
                <BoxNQE>
                    <TextQE>{array.length > 0 ? array.join('!' + ' x ') : 'a! x b! x c'}!...</TextQE>
                    <Textn>{isTypingN ? (n ? n : "n") : "n"}!</Textn>
                </BoxNQE>
                <TextIgual>=</TextIgual>
                <Form2>
                    <Textn>{isTypingN ? (n ? n : "n") : "n"}!</Textn>
                    <Traco></Traco>
                    <TextQE>{array.length > 0 ? array.join('!' + ' x ') : 'a! x b! x c'}!</TextQE>
                </Form2>
            </DisplayForm>

            <DisplayCalc>
                <TextResult>O resultado é: {resultado}</TextResult>
            </DisplayCalc>

            <Tecle>
                <Div>
                    <TextBn>Quantos elementos repetidos?</TextBn>
                    <TextInput
                        style={{
                            backgroundColor: 'gray',
                            width: "100%",
                            height: 40,
                            borderRadius: 15,
                            paddingHorizontal: 10,
                            color: 'white',
                        }}
                        value={quantidadeDeElementos} // Exibe o valor do input
                        onChangeText={setQuantidadeDeElementos}
                        keyboardType="numeric"
                    />

                    <BoxBtn>
                        <ModalButton onPress={() => addValue()}>
                            <Text>Enter</Text>
                        </ModalButton>
                    </BoxBtn>

                    <BoxBtn>
                        <Buttons onPress={handleClearPress}>
                            <TextButton>Clear</TextButton>
                        </Buttons>
                        <Buttons onPress={handleCalculate}>
                            <TextButton>Calcular</TextButton>
                        </Buttons>
                    </BoxBtn>
                </Div>
            </Tecle>

            <NavBar />
        </C>
    );
}
