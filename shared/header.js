import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <Text style={styles.headerText} numberOfLines={1}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        textAlign: 'center',
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
});
