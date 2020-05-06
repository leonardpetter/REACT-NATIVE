import React from 'react';
import { View, Text, StyleSheet ,FlatList } from 'react-native';


class List extends React.Component{
    constructor() {
        super();
        this.state = { 
            users: [],
            refreshing : false,
        }
        
    }

    renderItem = ({ item }) => (
    <View style={{ padding: 1,paddingEnd : 10,borderTopWidth : 1 ,borderBottomWidth: 1, borderRightWidth: 1, borderTopRightRadius: 20, borderBottomEndRadius: 20, borderLeftWidth: 1, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, borderBottomColor: '#000', height : 55 }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> Provinsi : {item.provinsi}</Text> 
         <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'right',}}>
            <Text style={{backgroundColor: 'yellow',}}> {item.kasusPosi} </Text>
            <Text style={{backgroundColor: 'lightblue', }}> {item.kasusSemb} </Text>
            <Text style={{backgroundColor: 'red',}}> {item.kasusMeni} </Text>  
        </Text>
    </View>
    )

    onRefresh = () => {
        this.getDataApi();
    }

    componentDidMount = () =>{
        this.getDataApi(); 
    }

    getDataApi = () =>  {
        this.setState({ refreshing: true })
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
            .then(response => response.json())
            .then(json => this.setState({users : json, refreshing: false}))
    }

    render() {
        
    //const listStudents = this.state.students.map(this.renderItem)
       return (
            <View>
                <FlatList 
                data={this.state.users.data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem} 
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                />
            </View>
       )
    }
}


export default List;
    