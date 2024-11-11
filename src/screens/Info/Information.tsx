import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, Alert,  } from 'react-native';
import { Container, ContainerText, TextResumo, TitleText, TextBody, StyleBontton, ButtonText, ContainerVideos } from './styled';
import YoutubeIframe from "react-native-youtube-iframe";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../src/types/navigation';
import NavBar from '../../componentes/NavBar/NavBar';
import Player from "../../componentes/Videos/Player";
import * as Font from 'expo-font';

type InformationProps = {
  route: RouteProp<RootStackParamList, 'Information'>;
  navigation: any;
}

export default function Information({ route, navigation }: InformationProps) { 
  // Estado para o videoId selecionado
  const [selectedVideoId, setSelectedVideoId] = useState<string>("eJH1Aqc63Z8"); // ID inicial

  // Função de callback para alteração de estado do vídeo
  const onStateChange = useCallback((state: any) => {
    if (state === "ended") { 
      Alert.alert("O vídeo terminou");
    }
  }, []);

  // Lista de vídeos com IDs e títulos
  const videos = [
    { id: "eJH1Aqc63Z8", title: "Introdução à Análise Combinatória" },
    { id: "2uEX-M2SYIE", title: "Permutações Simples" },
    { id: "3JZ_D3ELwOQ", title: "Combinações Simples" },
    { id: "RgKAFK5djSk", title: "Arranjos e Explicações Passo a Passo" },
  ];

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ContainerText>
            <TextBody>
              Descubra o mundo fascinante da matemática de forma simples e rápida com nosso aplicativo especializado em Análise Combinatória e Permutação!{'\n'}{'\n'}
              Nosso app foi criado para te ajudar a resolver cálculos complexos de maneira eficiente, seja para trabalhos escolares, concursos ou estudo autônomo.{'\n'}{'\n'}
              Com uma interface intuitiva, basta inserir os dados e o app faz o resto, apresentando o resultado detalhado e explicações passo a passo.
            </TextBody>
            <TitleText>{'\n'}Funcionalidades: {'\n'}</TitleText>
            <TextBody>
              Permutações Simples:{'\n'} {'\n'}
              Resolva questões que envolvem rearranjos de elementos de forma rápida.{'\n'}{'\n'}
              Combinações Simples:{'\n'}{'\n'}
              Facilite seus cálculos de seleção de grupos sem repetição.{'\n'}{'\n'}

              Permutações com Repetição:{'\n'}{'\n'}
              Encontre rapidamente o número de maneiras de ordenar elementos repetidos.{'\n'}{'\n'}
              Arranjos:{'\n'}{'\n'} 
              Resolva problemas que envolvem seleção e ordem de elementos.{'\n'}{'\n'}

              Explicações Passo a Passo:{'\n'}{'\n'}
              Entenda como cada cálculo é feito para aprender enquanto usa.{'\n'}{'\n'}

              Simples e Intuitivo:{'\n'}{'\n'}
              Design minimalista para facilitar a navegação e a experiência de uso.{'\n'}
            </TextBody>
        </ContainerText>

        {/* Lista de botões para trocar o vídeo */}
        <ContainerVideos>
          <TitleText>Escolha a aula que quer assistir{'\n'}</TitleText>
          {videos.map((video) => (
            <StyleBontton
              key={video.id}
              onPress={() => setSelectedVideoId(video.id)} // Define o videoId ao clicar no botão
            ><ButtonText>{video.title}</ButtonText></StyleBontton>
          ))}
        </ContainerVideos>

        {/* Componente Player com o videoId selecionado */}
        <Player videoId={selectedVideoId} onStateChange={onStateChange} />
      </ScrollView>
      
      <NavBar />
    </Container>
  );
}


