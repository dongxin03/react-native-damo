import React from 'react';
import {View,Text, Button,Image,StyleSheet,flatLIst} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const MOCKED_MOVIES_DATA = [
    {
      title: "标题",
      year: "2015",
      posters: { thumbnail: "http://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1558489244&di=897150e8c5cb9c6eec75d052704b688c&src=http://photo.16pic.com/00/60/83/16pic_6083800_b.jpg" }
    }
  ];
  
const REQUEST_URL ="https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class page1 extends React.Component{
    static navigationOptions = {
        title:"电影列表"
    }
    constructor(){
        super();
        this.state={
            movies:null
        }
        this.fetchDate = this.fetchDate.bind(this);
    }
    componentDidMount(){
        console.log('====================================');
        console.log(44);
        console.log('====================================');
        this.fetchDate();
    }
    fetchDate(){
        fetch(REQUEST_URL)
            .then(response=>response.json())
            .then(date=>{
                console.log('====================================');
                console.log(date);
                console.log('====================================');
                this.setState({
                    movies:date.movies
                })
            })
    }
    renderLoadingView(){
        return(
            <View style={style.container}>
                <Text style={style.title}>电影加载中。。。</Text>
            </View>
        )
    }
    renderMovie({item}){
        if(!item) return null;
        return(
            <View style={style.container}>
             <Image 
                style={style.thumbnail}
                resizeMode="contain"
                source={{
                    uri:item.posters.thumbnail
                }} 
             />
             <View style={style.rightContainer}>
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.year}>{item.year}</Text>
             </View>
         </View>
        )
    }
    render(){
        const {navigation} = this.props;
        const {movies} = this.state;
        // const movie = MOCKED_MOVIES_DATA[0];
        if(!movies){
            return this.renderLoadingView();
        }
        return (
            <FlatList
                data={this.state.movies}
                renderItem={this.renderMovie}
                style={style.list}
                keyExtractor={item => item.id}
            />    
        )
        // this.renderMovie(movies[0]);
        // return(
        //  <View style={style.container}>
        //      <Image 
        //         style={style.thumbnail}
        //         source={{
        //             url:movie.posters.thumbnail
        //         }} 
        //      />
        //      <View style={style.rightContainer}>
        //         <Text style={style.title}>{movie.title}</Text>
        //         <Text style={style.year}>{movie.year}</Text>
        //      </View>
        //  </View>
        // )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer:{
        flex:1
    },
    title:{
        fontSize:20,
        marginBottom:8,
        textAlign:"center"
    },
    year:{
        textAlign:"center"
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
      },
})
 
export default page1;