import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userName: {
        flex: 1,
        textAlign: 'left',
    },
    wave: {
        width: 28,
        height: 28,
    }
});

export default styles;
