import React, { useState } from "react";
import { View, Text, ScrollView } from 'react-native';
import { Container, ContainerText, TextResumo } from './styled';
import WebView from "react-native-webview";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../src/types/navigation';
import NavBar from '../../componentes/NavBar/NavBar';

type InformationProps = {
  route: RouteProp<RootStackParamList, 'Information'>;
  navigation: any; // ou o tipo de navegação apropriado, dependendo do pacote que você está usando
}

export default function Information({ route, navigation }: InformationProps) { 
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ContainerText>
          <TextResumo>
            <Text>
              Descubra o mundo fascinante da matemática de forma simples e rápida com nosso aplicativo especializado em Análise Combinatória e Permutação!
            </Text>
            <Text>       
              Nosso app foi criado para te ajudar a resolver cálculos complexos de maneira eficiente, seja para trabalhos escolares, concursos ou estudo autônomo. Com uma interface intuitiva, basta inserir os dados e o app faz o resto, apresentando o resultado detalhado e explicações passo a passo.
            </Text> 
              Funcionalidades:
              Permutações Simples: Resolva questões que envolvem rearranjos de elementos de forma rápida.
              Combinações Simples: Facilite seus cálculos de seleção de grupos sem repetição.
              Permutações com Repetição: Encontre rapidamente o número de maneiras de ordenar elementos repetidos.
              Arranjos: Resolva problemas que envolvem seleção e ordem de elementos.
              Explicações Passo a Passo: Entenda como cada cálculo é feito para aprender enquanto usa.
              Simples e Intuitivo: Design minimalista para facilitar a navegação e a experiência de uso.
          </TextResumo>
          <View style={{ height: 300 }}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/0GOUF8vNqzE?start=696" }}
              style={{ flex: 1 }}
              allowsInlineMediaPlayback
            />
          </View>
        </ContainerText>
      </ScrollView>
      <NavBar />
    </Container>
  );
}


