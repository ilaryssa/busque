import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#003566', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    gap: 100,
    paddingVertical: 50,
  },
  title: {
    textAlign: 'center',
    width: '80%',
    color: '#fffeee', 
    fontSize: 80,
    
  },
  paragraph: {
    textAlign: 'left',
    width: '80%',
    color: '#fffeee', 
    fontSize: 30,
  },
  buttonsContainer: {
    width: '80%',
    gap: 20,
  },
});

export default styles;