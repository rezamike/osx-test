import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

const styles = {
    header: {
        backgroundColor: '#666',
    },
    title: {
        textAlign: 'center',
        padding: '5% 10%',
        fontWeight: 'bold',
        fontSize: 80
    }
};

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={[styles.title, {
                    fontFamily: "AmaticSC-Bold"
                }]}>TEST STUFF</Text>
            </View>
        );
    }
}

export default Header;