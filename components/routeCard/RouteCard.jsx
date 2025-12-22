// components/RouteCard.jsx
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function RouteCard({ variant = 'active', route = 'ida' }) {
  const isNext = variant === 'next';

  return (
    <Card style={[styles.card, isNext && styles.nextCard]}>

      <View style={[styles.header, isNext && styles.nextHeader]}>
        <View>
          <Text style={styles.title}>Rodoviária → UFC</Text>
          <Text style={styles.subtitle}>Ônibus A</Text>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.time}>12:50</Text>
          <Text style={styles.status}>
            {isNext ? 'Próxima viagem' : 'Em andamento'}
          </Text>
        </View>
      </View>

      <View style={styles.stops}>
        {['Rodoviária', 'Anexo', 'Constructec', 'Combate', 'UFC'].map((stop, i) => (
          <View key={i} style={styles.stopRow}>
            <View style={styles.dot} />
            <Text style={styles.stopText}>{stop}</Text>
          </View>
        ))}
      </View>
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
  }
});
