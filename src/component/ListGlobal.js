import React from 'react';
import { View, Text, StyleSheet ,FlatList } from 'react-native';


class ListGlobal extends React.Component{
    constructor() {
        super();
        this.state = { 
            positif: [],
            sembuh: [],
            meninggal: [],
        }
    }

    componentDidMount (){
        fetch('https://covid19.mathdro.id/api')
            .then(response => response.json())
            .then(json => (
                this.setState({positif: json.confirmed.value}),
                this.setState({sembuh: json.recovered.value}),
                this.setState({meninggal: json.deaths.value})
            ))
    }

    render() {
        /* Render ........ */
       return (
            <View style={{flexDirection : 'row', justifyContent : 'space-around'}}>
                <View style={styles.box1}>
                     <Text style={styles.Textstyle}>POSITIF</Text>
                     <Text></Text>
                     <Text style={styles.Textstyle}>{this.state.positif}</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.Textstyle}>SEMBUH</Text>
                    <Text></Text>
                    <Text style={styles.Textstyle}>{this.state.sembuh}</Text>
                </View>
                <View style={styles.box3}>
                    <Text style={styles.Textstyle}>MENINGGAL</Text>
                    <Text></Text>
                    <Text style ={styles.Textstyle}>{this.state.meninggal}</Text>
                </View>
            </View>
       )
    }
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
            borderTopStartRadius : 30,
            borderTopEndRadius : 30,
            borderBottomStartRadius : 30,
            borderBottomEndRadius : 30
            
        },
        box2 : {
            height : 100,
            width : 125,
            backgroundColor : 'skyblue',
            borderTopStartRadius : 30,
            borderTopEndRadius : 30,
            borderBottomStartRadius : 30,
            borderBottomEndRadius : 30
        },
        box3 : {
            height : 100,
            width : 125,
            backgroundColor : 'red',
            borderTopStartRadius : 30,
            borderTopEndRadius : 30,
            borderBottomStartRadius : 30,
            borderBottomEndRadius : 30
        },
        Textstyle : {
            textAlign : 'center',
            fontSize : 20,
            fontWeight : 'bold'
        }
    })


export default ListGlobal;