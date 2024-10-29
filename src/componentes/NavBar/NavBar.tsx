import React from 'react';
import { Container, IconButton, Icon} from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native'; 
import { RootStackParamList } from '../../types/navigation';

const HomeIcon = require("../../ImageApp/home.png")
const CalculatorIcon = require("../../ImageApp/calculator.png")
const InformationIcon = require("../../ImageApp/information.png")

type Props = NavigationProp<RootStackParamList>;

function NavBar() {
    const {navigate} = useNavigation<Props>(); 
    
    const navigateToHome = () => navigate('Home');
    // const navigateToCalculadoras = () => navigate('Calculadoras');
    const navigateToInformation = () => navigate('Information');

    return (
        <Container>
            <IconButton onPress={navigateToHome}>
                <Icon source={HomeIcon}/>
            </IconButton>

            {/* <IconButton onPress={navigateToCalculadoras}>
                <Icon source={CalculatorIcon}/>
            </IconButton> */}

            <IconButton onPress={navigateToInformation}>
                <Icon source={InformationIcon}/>
            </IconButton>
        </Container> 
    );
}
export default NavBar;
