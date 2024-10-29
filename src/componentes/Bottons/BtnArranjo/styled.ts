import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color:  #005200;
`;

export const BotaoVoltar = styled.TouchableOpacity`
    background-color: green;
    height: 35px;
    width: 75px;
    border-radius: 15px;
    margin: 10px;
    align-items: center;
    justify-content: center;
`;
0
export const AreaQuestion = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 5%;  
`;

export const TextQuestion = styled.Text`
    font-size: 20px;
    font-family: Helvetica;
    color: black;
`;





export const DisplayForm = styled.View`
    height: 100%;
    width: 60%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextA = styled.Text`
    font-size: 34px;
    font-weight: bold;
    color: black;
    top: -7px;
`;

export const Textnp = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
    top: 7px;
`;

export const TextIgual = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Form2 = styled.View`
    
`;

export const Textn = styled.Text`
    font-size: 20px;
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
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
`;

export const AreaButtons = styled.View`
    gap: 30px;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const TextBtn = styled.Text`
    font-size: 18px;
    color: black;
    font-weight: bold;
`;


export const BotaoArranjo = styled.TouchableOpacity`
    background-color: #007b00;
    height: 15%;
    width: 90%;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;