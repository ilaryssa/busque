import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: '#003566', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    gap: 100,
  },
  title: {
    textAlign: 'center',
    width: '80%',
    color: '#fffeee', 
    fontSize: 80,
    paddingTop: 100,
  },
  paragraph: {
    textAlign: 'left',
    width: '80%',
    color: '#fffeee', 
    fontSize: 30,
    textAlign: 'center',
    margin:20
  },
  buttonsContainer: {
    width: '80%',
    justifyContent: 'flex-end',
    margin: 100,
    gap: 20,
  },
});

export default styles;