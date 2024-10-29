import React from 'react';
import { StatusBar } from 'react-native';
import { Container, DisplayForm, TextA, Textnp, TextIgual, Form2, Traco, Textn, TextNp, AreaButtons, TextBtn, AreaQuestion, TextQuestion, BotaoArranjo, BotaoArranjoComposto, BotaoCombinacao, BotaoCombinacaoComposta } from '../home/styles/styled';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import BottonArranjo from '../../componentes/Bottons/BtnArranjo/BottonArranjo';

import '../calculadora/img/matematica.png';


import NavBar from '../../componentes/NavBar/NavBar';

// Defina o tipo para a propriedade de navegação do NavBar
type NavBarNavigationProp = NavigationProp<RootStackParamList>;

export default function CalculadorasScreen() {
  const navigation = useNavigation<NavBarNavigationProp>();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#004D40" translucent />
      
      <AreaQuestion>
        <TextQuestion>
          Qual calculadora você gostaria de utilizar?
        </TextQuestion>
      </AreaQuestion>

    
        
          
            

      <AreaButtons>
        {/* Arranjo */}
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
          <TextBtn>Arranjo</TextBtn>
          </DisplayForm>

          
        </BotaoArranjo>

        {/* Combinação */}
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
          <TextBtn>Combinação</TextBtn>
        </BotaoCombinacao>


        {/* Arranjo Composto */}
        <BotaoArranjoComposto onPress={() => { navigation.navigate('ArranjoComposto'); }}>
          <DisplayForm style = {{}}>
            <TextA>AC</TextA>
            <Textnp></Textnp>
            <TextIgual>=</TextIgual>
            <Form2>
              <Textn>n!</Textn>
              <Traco></Traco>
              <TextNp></TextNp>
            </Form2>
          </DisplayForm>
          <TextBtn>Arranjo Composto</TextBtn>
        </BotaoArranjoComposto>

        {/* Combinação Composta */}
        <BotaoCombinacaoComposta onPress={() => navigation.navigate('CombinacaoComposta')}>
          <DisplayForm>
            <TextA>CC</TextA>
            <Textnp></Textnp>
            <TextIgual>=</TextIgual>
            <Form2>
              <Textn>n!</Textn>
              <Traco></Traco>
              <TextNp></TextNp>
            </Form2>
          <TextBtn>Combinação Composta</TextBtn>
          </DisplayForm>
        </BotaoCombinacaoComposta>

        {/* Permutação */}
        <BotaoCombinacaoComposta onPress={() => navigation.navigate('Permutacao')}>
          <DisplayForm>
            <TextA>P</TextA>
            <Textnp>n</Textnp>
            <TextIgual>=</TextIgual>
            <Form2>
              <Textn>n!</Textn>
            </Form2>
          </DisplayForm>
          <TextBtn>Permutação</TextBtn>
        </BotaoCombinacaoComposta>
      </AreaButtons>

      <NavBar />
    </Container>
  );
}
