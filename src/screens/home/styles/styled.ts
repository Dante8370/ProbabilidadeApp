import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
    flex: 1;
    gap: -30px;
    background-color: #D3D3D3;
`;

export const AreaButtons = styled.View`
    gap: ${hp('2%')}px;
    width: 100%;
    height: ${hp('80%')}px;
    align-items: center;
    justify-content: center;
    margin-top: ${hp('15%')}px;
    margin-bottom: ${hp('20%')}px;
`;

export const AreaQuestion = styled.View`
    top: 0;
    width: 100%;
    height: ${hp('10%')}px;
    background-color: #00695C;
    align-items: center;
    margin-top: ${hp('5%')}px;  
`;

export const BotaoVoltar = styled.TouchableOpacity`
    background-color: green;
    height: ${hp('5%')}px;
    width: ${wp('20%')}px;
    border-radius: 15px;
    margin: ${hp('1%')}px;
    align-items: center;
    justify-content: center;
`;

export const TextQuestion = styled.Text`
    margin-top: ${hp('2%')}px;
    margin-bottom: 0px;
    font-size: ${wp('5%')}px;
    font-family: Helvetica;
    color: white;
`;

export const BoxNQE = styled.View`

`;

export const TextQE = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-left: 5px;
    
`;

export const DisplayForm = styled.View`
    height: 100%;
    width: ${wp('60%')}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextA = styled.Text`
    font-size: ${wp('7%')}px;
    font-weight: bold;
    color: black;
`;

export const Textnp = styled.Text`
    font-size: ${wp('5%')}px;
    font-weight: bold;
    color: black;
    top: ${hp('1%')}px;
`;

export const TextIgual = styled.Text`
    font-size: ${wp('5%')}px;
    font-weight: bold;
    color: black;
    margin-left: ${wp('2%')}px;
    margin-right: ${wp('2%')}px;
`;

export const Form2 = styled.View`
    align-items: center;
`;

export const FormAR = styled.View`
    flex-direction: row;
`;


export const Textn = styled.Text`
    font-size: ${wp('4%')}px;
    font-weight: bold;
    color: black;
`;

export const Textp = styled.Text`
    font-size: ${wp('4%')}px;
    font-weight: bold;
    color: black;
    top: ${wp('-1%')}px;
`;

export const Traco = styled.View`
    height: ${hp('0.3%')}px;
    width: ${wp('20%')}px;
    background-color: black;
`;

export const TextNp = styled.Text`
    font-size: ${wp('5%')}px;
    font-weight: bold;
    color: black;
    margin-left: ${wp('2%')}px;
`;

export const TextBtn = styled.Text`
    font-size: ${wp('4.5%')}px;
    color: black;
    font-weight: bold;
`;

export const BotaoArranjo = styled.TouchableOpacity`
    background-color: white;
    height: ${hp('15%')}px;
    width: ${wp('90%')}px;
    border-radius: 25px;
    border: 2px;
    align-items: center;
    justify-content: center;
`;

export const BotaoArranjoComposto = styled.TouchableOpacity`
    background-color: white;
    height: ${hp('15%')}px;
    width: ${wp('90%')}px;
    border-radius: 25px;
    border: 2px;
    align-items: center;
    padding-right: ${wp('7%')}px;
`;

export const BotaoCombinacao = styled.TouchableOpacity`
    background-color: white;
    height: ${hp('15%')}px;
    width: ${wp('90%')}px;
    border-radius: 25px;
    border: 2px;
    align-items: center;
    justify-content: center;
`;

export const BotaoCombinacaoComposta = styled.TouchableOpacity`
    background-color: white;
    height: ${hp('15%')}px;
    width: ${wp('90%')}px;
    border-radius: 25px;
    border: 2px;
    align-items: center;
    justify-content: center;
`;

export const PermutacaoSimples = styled.TouchableOpacity`
    background-color: white;
    height: ${hp('15%')}px;
    width: ${wp('90%')}px;
    border-radius: 25px;
    border: 2px;
    align-items: center;
    justify-content: center;
`;
