import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
// import { bold } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'flex-end',
  },

  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingBottom: 30,
    alignItems: 'center',
  },

  cancel: {
    width: 75,
  },

  cancelBtn: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },

  fotoBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.red,
  },

  fotoBtn2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    borderColor: colors.white,
    borderWidth: 5,
  },

  changeCamera: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 75,
  },

  iconChange: {
    color: colors.white,
  },
});

export default styles;
