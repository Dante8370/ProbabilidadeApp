declare module 'react-native-video-player' {
    import { Component } from 'react';
  
    export interface VideoPlayerProps {
      video: string;
      // Adicione mais props conforme necessário
    }
  
    export default class VideoPlayer extends Component<VideoPlayerProps> {}
  }
  