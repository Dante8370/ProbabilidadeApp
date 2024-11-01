import { View } from "react-native";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
   height: ${hp('20%')}px;
   width: ${wp('100%')}px;
   align-items: center;
`;

export const C = styled.View`
    flex: 1;
    align-items: center;
    background-color: #D3D3D3;
`;

export const Head = styled.View`
    height: ${hp('15%')}px;
    width: ${wp('100%')}px;
    background-color: #00695C;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TextLogo = styled.Text`
    font-size: ${wp('8%')}px;
    color: white;
    font-weight: bold;
    font-family: Helvetica;
    right: ${wp('-5%')}px;
    margin-top:  ${wp('8%')}px;
`; 

export const ModalContainer = styled.Modal``;

export const ModalButtonContainer = styled.View`
    left: ${wp('20%')}px;
    top: 0;
`;

export const ModalButton = styled.TouchableOpacity`
    padding-top: ${hp('3%')}px;
`;

export const ModalContent = styled.View`
    background-color: #0CABA8;
    height: ${hp('60%')}px;
    width: ${wp('90%')}px;
    border-radius: 30px;
    align-items: center;
`;

export const CloseModal = styled.TouchableOpacity`
    bottom: ${hp('-80%')}px;
    background-color: #008F8C;
    height: ${hp('5%')}px;
    width: ${wp('20%')}px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const DisplayForm = styled.View`
    height: ${hp('10%')}px;
    width: ${wp('80%')}px;
    background-color: white;
    margin-top: ${hp('5%')}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextA = styled.Text`
    font-size: ${wp('11%')}px;
    font-weight: bold;
    color: black;
    top: ${hp('-1%')}px;
`;

export const Textnp = styled.Text`
    font-size: ${wp('6%')}px;
    font-weight: bold;
    color: black;
    top: ${hp('1%')}px;
`;

export const TextIgual = styled.Text`
    font-size: ${wp('6%')}px;
    font-weight: bold;
    color: black;
    margin-left: ${wp('2%')}px;
    margin-right: ${wp('2%')}px;
`;

export const Form2 = styled.View``;

export const Textn = styled.Text`
    font-size: ${wp('6%')}px;
    font-weight: bold;
    color: black;
    margin-left: ${wp('7%')}px;
`;

export const Traco = styled.View`
    height: ${hp('0.5%')}px;
    width: ${wp('20%')}px;
    background-color: black;
`;

export const TextNp = styled.Text`
    font-size: ${wp('6%')}px;
    font-weight: bold;
    color: black;
    margin-left: ${wp('2%')}px;
`;

export const DisplayCalc = styled.View`
    height: ${hp('10%')}px;
    width: ${wp('80%')}px;
    background-color: white;
    margin-top: ${hp('5%')}px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const Div = styled.View`
    height: 100%;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    right: ${wp('-3.5%')}px;
`;

export const TextResult = styled.Text`
    font-size: ${wp('7%')}px;
    color: black;
`;

export const Tecle = styled.View`
    height: ${hp('40%')}px;
    width: ${wp('80%')}px;
    background-color: white;
    margin-top: ${hp('2.5%')}px;
    border-radius: 30px;
    padding: ${hp('2%')}px;
    align-items: center;
`;

export const Buttons = styled.TouchableOpacity`
    height: ${hp('5%')}px;
    width: ${wp('20%')}px;
    align-items: center;
    justify-content: center;
    background-color: #4F4F4F;
    color: white;
    margin: ${hp('0.5%')}px;
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    font-size: ${wp('5.5%')}px;
    font-weight: bold;
    color: white;
`;
