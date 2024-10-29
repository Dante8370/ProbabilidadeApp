import styled from "styled-components/native";


export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    bottom: 0;
    background-color: white;
    position: absolute;
`;

export const IconButton = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    background-color: #00695C;
    margin: 8px 20px;
    border-radius: 30px;
    border: 2px;
`;

export const Icon = styled.Image.attrs({
resizeMode: "contain"

})`
    width: 35px;
    height: 35px;
`;