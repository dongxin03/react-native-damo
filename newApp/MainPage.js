import React from 'react';
import {Text} from 'react-native';

// class MainPage extends React.Component{
//     render(){
//         return(
//          <Text>
//             这是首页
//         </Text>
//         )
//     }
// }
 
// export default MainPage;

function MainPage (props){
    return<Text>函数式{props.name}</Text>
}

module.exports = MainPage;

// var MainPage = React.createClass({
//     render(){
//         return<Text>es5</Text>
//     }
// });

// module.exports = MainPage;