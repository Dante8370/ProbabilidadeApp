import styled from "styled-components/native";

export const Container = styled.View`
    background-color: white;
    flex: 1;
`;

export const ContainerText = styled.View`
    width: 100%;
    align-items: center;
    padding: 10px;
    margin-top: 10%;
`;  

export const TextResumo = styled.Text`
    width: 100%;
    font-family: sans-serif;
    font-size: 24px;
    color: black;
`;

export const TitleText = styled.Text`
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
`;

export const TextBody = styled.Text`
    margin-top: 10%;
    font-size: 24px;
`;

export const ContainerVideos = styled.View`
    width: 100%;
    align-items: center;
    
`;

export const StyleBontton = styled.TouchableOpacity`
    margin: 10px;
    padding: 15px;
    background-color: black;  
    border-radius: 8px;         
    align-items: center;        
    justify-content: center;     
    width: 80%;                  
    height: 60px; 
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
`;
