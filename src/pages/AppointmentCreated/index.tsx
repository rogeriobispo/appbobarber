import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'
import { Container, Title, Description, OkButton, OkButtonText } from './styled'
import { format} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

interface RouteParams {
  date: number;
}
const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute()

  const routeParams = params as RouteParams;

  const formatedDate = useMemo(() => {
    return format(routeParams.date, 
      "EEEE', dia' dd 'de' MMMM 'de' yyyy, 'ás' HH:mm'h'", 
      { locale: ptBr })
  }, [])
  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        }
      ],
      index: 1
    })
  }, [reset])

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento Concluido</Title>
      <Description>{formatedDate}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>OK</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
