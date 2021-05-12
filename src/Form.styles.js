import {StyleSheet} from 'react-native';

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
    borderWidth: 1,
    // borderColor: '#bdbdbd',
  },
  textStyles: {
    color: '#000',
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 16,
  },
  buttonStyle: {
    marginTop: 16,
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
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  errorText: {
    color: '#e53935',
    marginTop: 4,
  },
  previewStyles: {
    marginTop: 16,
    fontWeight: 'bold',
  },
});

export default FormStyles;
