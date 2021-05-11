//package import
import {StyleSheet} from 'react-native';

//local import

const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 64,
    padding: 16,
  },
  input: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginBottom: 16,
    borderWidth: 1,
    // borderColor: '#bdbdbd',
  },
  textStyles: {
    color: '#000',
    fontWeight: '500',
    marginBottom: 8,
  },
  buttonStyle: {
    marginTop: 24,
    backgroundColor: '#ffa726',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 5,
  },
  submitStyles: {
    alignSelf: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
  borderColorGrey: {
    borderColor: '#bdbdbd',
  },
  borderColorRed: {
    borderColor: '#e53935',
  },
});

export default FormStyles;
