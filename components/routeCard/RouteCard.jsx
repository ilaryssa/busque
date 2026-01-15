// components/RouteCard.jsx
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function RouteCard({ variant = 'active', isDriver = false, onStart, completedStops = 0, stops = [], title, bus, time, status }) {
  const isNextVisual = variant === 'next';

  return (
    <Card style={[styles.card, isNextVisual && styles.nextCard]}>

      <View style={[styles.header, isNextVisual && styles.nextHeader]}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{bus}</Text>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.status}>
            {status === 'next' && 'Próxima viagem'} 
            {status === 'active' && 'Em andamento'}
            {status === 'finished' && 'Finalizada'}
          </Text>
        </View>
      </View>

      <View style={styles.stops}>
        {/* {['Rodoviária', 'Anexo', 'Constructec', 'Combate', 'UFC'].map((stop, i) => ( */}
        {stops.map((stop, i) => (
          <View key={i} style={styles.stopRow}>
            {/* <View style={styles.dot} /> */}
            <View
              style={[
                styles.dot,
                isNextVisual && styles.nextDot,
                i < completedStops && styles.dotCompleted,
                i === completedStops && styles.dotCurrent,
              ]}
            />

            <Text style={[styles.stopText, isNextVisual && styles.nextStops]}>{stop}</Text>

            
          </View>
        ))}
      </View>

        {isDriver && !isNextVisual && (
          <Button
            mode='contained'
            onPress={onStart}
            textColor='#fffeee' 
            buttonColor="#003566" 
            labelStyle={{fontSize: 20}} 
            contentStyle={{padding: 10}} 
            style={{
                borderRadius: 30,
                marginHorizontal: 30,
            }}
          >
            Iniciar Viagem
          </Button>
        )}

    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    width: 'auto',
    borderRadius: 16,
    backgroundColor: '#fffeee',
    borderColor: '#003566',
    borderWidth: 1,
    marginRight: 16,
    overflow: 'hidden',
  },
  nextCard: {
    borderColor: '#999',
  },
  header: {
    backgroundColor: '#003566',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextHeader: {
    backgroundColor: '#999',
  },
  title: {
    color: '#fffeee',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    color: '#fffeee',
    fontSize: 12,
    fontSize: 20,
  },
  time: {
    color: '#fffeee',
    fontWeight: 'bold',
    fontSize: 20,
  },
  status: {
    color: '#fffeee',
    fontSize: 12,
    fontSize: 20,
  },
  stops: {
    padding: 16,
  },
  stopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 8,
    borderColor: '#003566'
  },
  stopText: {
    fontSize: 20, 
    color: '#003566',
  },
  nextStops: {
    color: '#999',
  },
  dotCompleted: {
    backgroundColor: '#003566',
  },
  dotCurrent: {
    backgroundColor: '#999',
  },
  nextDot: {
    borderColor: '#999',
  },
});
