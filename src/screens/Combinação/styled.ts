import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
   height: 20%;
   
   width: 100%;
   align-items: center;
   
`;

export const C = styled.View`
    flex: 1;
    align-items: center;
    background-color: #D3D3D3;
`;

export const Head = styled.View`
    height: 12%;
    width: 100%;
    background-color: #00695C;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TextLogo = styled.Text`
    font-size: 32px;
    color: white;
    font-weight: bold;
    font-family: Helvetica;
    right: -20px;
`; 

export const ModalContainer = styled.Modal``;

export const ModalButtonContainer = styled.View`
    left: 100px;
    top: -10px;
`;

export const ModalButton = styled.TouchableOpacity`
    padding-top: 30px;
`;

export const ModalContent = styled.View`
    background-color: #0CABA8;
   
    height: 60%;
    width: 90%;
    border-radius: 30px;
    align-items: center;
`;

export const CloseModal = styled.TouchableOpacity`
    bottom: -80%;
    background-color: #008F8C;
    height: 40px;
    width: 80px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const DisplayForm = styled.View`
    height: 80px;
    width: 80%;
    background-color: white;
    
    margin-top: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextA = styled.Text`
    font-size: 44px;
    font-weight: bold;
    color: black;
    top: -7px;
`;

export const Textnp = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
    top: 7px;
`;

export const TextIgual = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Form2 = styled.View`
    
`;

export const Textn = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-left: 30px;
`;

export const Traco = styled.View`
    height: 3px;
    width: 80px;
    background-color: black;
`;

export const TextNp = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
`;

export const DisplayCalc = styled.View`
    height: 10%;
    width: 80%;
    background-color: white;
    margin-top: 40px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const Div =styled.View`
    height: 100%;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    right: -15px;
`;

export const TextResult = styled.Text`
    font-size: 30px;
    color: black;
`;

export const Tecle = styled.View`
    height: 40%;
    width: 80%;
    background-color: white;
    margin-top: 20px;
    border-radius: 30px;
    padding: 15px;
    align-items: center;
`;

export const Buttons = styled.TouchableOpacity`
    height: 40px;
    width: 80px;
    align-items: center;
    justify-content: center;
    background-color: #4F4F4F;
    color: white;
    margin: 5px;
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: white;
`;
