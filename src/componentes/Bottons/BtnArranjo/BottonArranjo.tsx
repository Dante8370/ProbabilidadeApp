import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container, BotaoVoltar, DisplayForm, TextA, Textnp, TextIgual, Form2, Traco, Textn, TextNp, AreaButtons, TextBtn, AreaQuestion, TextQuestion, BotaoArranjo} from '../BtnArranjo/styled';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Importe NavigationProp
import { RootStackParamList } from '../../../types/navigation';



export default function BottonArranjo() {
  const navigation = useNavigation<NavBarNavigationProp>();
 

 // Defina o tipo para a propriedade de navegação do NavBar
type NavBarNavigationProp = NavigationProp<RootStackParamList>;

  return (
    
    <Container>
            <BotaoArranjo onPress={() => navigation.navigate('Arranjo')}>
            <DisplayForm>
                <TextA>A</TextA>
                <Textnp>n p</Textnp>
                <TextIgual>=</TextIgual>

                <Form2>
                    <Textn>n!</Textn>
                    <Traco></Traco>
                    <TextNp>n - p!</TextNp>
                </Form2>
            </DisplayForm>
              <TextBtn>Arranjo</TextBtn>
            </BotaoArranjo>

    </Container>
  )}