/**
 * Created by shadow on 16/4/23.
 */


const Item = React.createClass({

    render(){
        return <li>
            one one ! item
        </li>

    }

});


// 三元运算(但是并不支持if else复杂运算,复杂可在外层写)
//const bool = false;
//const result = [];
//if(bool){
//    result.push(<Item/>);
//    result.push(<Item/>);
//}else{
//    result.push(<h1>111111</h1>);
//    result.push(<h1>111111</h1>);
//}
//
//ReactDOM.render(<ul style={ {backgroundColor:'red'} }>
//    { result }
//    <Item/>
//</ul>, document.getElementById('test'));






// jsx语法,加入属性和行内样式
ReactDOM.render(<ul style={ {backgroundColor:'red'} }>
    <Item/>
    <Item/>
</ul>, document.getElementById('test'));

//以下是翻译成javascript语法
ReactDOM.render(
    React.createElement('ul',
        {style:{backgroundColor:'yellow'}},
        React.createElement(<Item/>),
        React.createElement(<Item/>)

    ),document.getElementById('test'));
























