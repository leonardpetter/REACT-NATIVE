import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/* COBA LATIHAN LAYOUT UNTUK DIMASUKAN DALAM listGlobal.js */

const Layout = () => {
    return (
        <View style={{flexDirection : 'row', justifyContent : 'space-around',}}>
            <View style={styles.box1}><Text style={styles.Textstyle}>Positif</Text></View>
            <View style={styles.box3}><Text style={styles.Textstyle}>Sembuh</Text></View>
            <View style={styles.box2}><Text style={styles.Textstyle}>Meninggal</Text></View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        position: 'relative',
    },
    box1 : {
        
        height : 100,
        width : 125,
        backgroundColor : 'yellow',
        borderTopStartRadius : 40,
        borderTopEndRadius : 40,
        borderBottomStartRadius : 40,
        borderBottomEndRadius : 40
        
    },
    box2 : {
        height : 100,
        width : 125,
        backgroundColor : 'red',
        borderTopStartRadius : 40,
        borderTopEndRadius : 40,
        borderBottomStartRadius : 40,
        borderBottomEndRadius : 40
    },
    box3 : {
        height : 100,
        width : 125,
        backgroundColor : 'skyblue',
        borderTopStartRadius : 40,
        borderTopEndRadius : 40,
        borderBottomStartRadius : 40,
        borderBottomEndRadius : 40
    },
    Textstyle : {
        textAlign : 'center',
        fontSize : 20,
        fontWeight : 'bold'
    }
})



export default Layout;