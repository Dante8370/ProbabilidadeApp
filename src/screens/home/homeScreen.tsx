import React from 'react';
import { StatusBar, ScrollView, Button, TouchableOpacity, Text } from 'react-native';
import { Container, DisplayForm, TextA, Textnp, TextIgual, Form2, FormAR, Traco,
   Textn, Textp, TextNp, AreaButtons, TextBtn, AreaQuestion, TextQuestion, PermutacaoSimples, BotaoArranjo,
    BotaoArranjoComposto, BotaoCombinacao, BotaoCombinacaoComposta, TextQE, BoxNQE } from '../home/styles/styled';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

import '../calculadora/img/matematica.png';
import NavBar from '../../componentes/NavBar/NavBar';
import Player from '../../componentes/Videos/Player';


// Defina o tipo para a propriedade de navegação do NavBar
type NavBarNavigationProp = NavigationProp<RootStackParamList>;

export default function CalculadorasScreen() {
  const navigation = useNavigation<NavBarNavigationProp>();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#00695C" translucent />
      
      <AreaQuestion>
        <TextQuestion>
          Qual calculadora você gostaria de utilizar?
        </TextQuestion>
      </AreaQuestion>
   
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}>
      <AreaButtons>

         {/* Permutação */}

        <TextBtn>Permutação simples</TextBtn>
        <PermutacaoSimples onPress={() => navigation.navigate('PermutacaoSimples')}>
              <DisplayForm>
                  <TextA>P</TextA>
                  <BoxNQE>
                      <Textnp>n</Textnp>
                  </BoxNQE>
                  <TextIgual>=</TextIgual>
                  <Form2>
                      <Textn>n!</Textn>
                  </Form2>
              </DisplayForm>
          </PermutacaoSimples>

         <TextBtn>Permutação com Repetição</TextBtn>
        <BotaoCombinacaoComposta onPress={() => navigation.navigate('Permutacao')}>
        <DisplayForm>
                <TextA>P</TextA>
                <BoxNQE>
                    <TextQE>a! x b! x c!...</TextQE>
                    <Textn>n!</Textn>
                </BoxNQE>
                <TextIgual>=</TextIgual>
                <Form2>
                    <Textn>n!</Textn>
                    <Traco></Traco>
                    <TextQE>a! x b! x c!</TextQE>
                </Form2>
            </DisplayForm>
        </BotaoCombinacaoComposta>
      
        {/* Arranjo */}
        <TextBtn>Arranjo</TextBtn>
        <BotaoArranjo onPress={() => navigation.navigate('Arranjo')}>
          <DisplayForm>
            <TextA>A</TextA>
            <Textnp>n p</Textnp>
            <TextIgual>=</TextIgual>
            <Form2>
              <Textn>n!</Textn>
              <Traco></Traco>
              <TextNp>(n - p)!</TextNp>
            </Form2>
          </DisplayForm>
        </BotaoArranjo>

        
        {/* Arranjo Composto */}
        <TextBtn>Arranjo Com Repetição</TextBtn>
        <BotaoArranjoComposto onPress={() => { navigation.navigate('ArranjoComposto'); }}>
          <DisplayForm style = {{}}>
            <TextA>AR</TextA>
            <Textnp>n p</Textnp>
            <TextIgual>=</TextIgual>
            <FormAR>
              <Textn>n</Textn>
              <Textp>p</Textp>
            </FormAR>
          </DisplayForm>
        </BotaoArranjoComposto>

        {/* Combinação */}
        <TextBtn>Combinação Simples</TextBtn>
        <BotaoCombinacao onPress={() => navigation.navigate('Combinacao')}>
          <DisplayForm>
            <TextA>C</TextA>
            <Textnp>n p</Textnp>
            <TextIgual>=</TextIgual>
            <Form2>
              <Textn>n!</Textn>
              <Traco></Traco>
              <TextNp>p! (n - p)!</TextNp>
            </Form2>
          </DisplayForm>
        </BotaoCombinacao>
      </AreaButtons>
      </ScrollView>

      <NavBar />
    </Container>
  );
}
