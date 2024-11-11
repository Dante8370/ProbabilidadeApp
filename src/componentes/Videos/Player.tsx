import React, { useCallback, useState } from "react";
import { View, Text, Alert } from 'react-native';
import YoutubeIframe from "react-native-youtube-iframe";
import { Container } from './styles';

// Tipagem das props esperadas para o Player
type PlayerProps = {
  videoId: string; // videoId do YouTube
  onStateChange: (state: any) => void; // Função chamada quando o estado do vídeo mudar
};

export default function Player({ videoId, onStateChange }: PlayerProps) {
  const [ready, setReady] = useState<boolean>(false);

  // Callback quando o estado do vídeo mudar (por exemplo, vídeo finalizado)
  const handleStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setReady(false);
      onStateChange(state); // Chama o callback passado via props
      Alert.alert("O vídeo terminou");
    }
  }, [onStateChange]);

  return (
    <Container>
      <YoutubeIframe 
        height={300}
        width={400}
        videoId={videoId} // Passa o videoId recebido como prop
        onChangeState={handleStateChange} // Passa a função que lida com o estado do vídeo
        play={ready} // Controla a reprodução
      />
    </Container>
  );
}
