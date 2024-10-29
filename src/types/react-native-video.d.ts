declare module 'react-native-video' {
    import { Component } from 'react';
    import { ViewStyle, TextStyle } from 'react-native';
  
    export interface VideoProps {
      source: any;
      style?: ViewStyle;
      onLoad?: () => void;
      onError?: () => void;
      // Adicione mais props conforme necessário
    }
  
    export default class Video extends Component<VideoProps> {}
  }
  