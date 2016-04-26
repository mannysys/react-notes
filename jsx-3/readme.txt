jsx写法,加入属性和行内样式


1.内嵌样式采用驼峰写法

ReactDOM.render(<ul style={ {backgroundColor:'red'} }>
    <Item/>
    <Item/>
</ul>, document.getElementById('test'));


带有前缀的 -webkit   jsx写法是首字母大写 Webkit ( 除了m开头的小写如: margin-top  -> marginTop )



2.自定义属性,不含对象的话,可以这样写 abc="123"

ReactDOM.render(<ul style={ {backgroundColor:'red'} abc="123" }>
    <Item/>
    <Item/>
</ul>, document.getElementById('test'));


3.
// 三元运算(但是并不支持if else复杂运算)

const bool = false;

ReactDOM.render(<ul style={ {backgroundColor:'red'} }>
    { bool ? <Item/> : <h1>my name is h1</h1>}
    <Item/>
</ul>, document.getElementById('test'));

写在样式里:
style={ {backgroundColor: bool ? 'yellow' : 'red'} }


有复杂元素使用if else时可以写在外层

const bool = false;
const result = [];
if(bool){
    result.push(<Item/>);
    result.push(<Item/>);
}else{
    result.push(<h1>111111</h1>);
    result.push(<h1>111111</h1>);
}

ReactDOM.render(<ul style={ {backgroundColor:'red'} }>
    { result }
    <Item/>
</ul>, document.getElementById('test'));





4.
返回只能返回一个结果(受限于javascript),如果返回多个元素,最外层使用div包裹起来

// jsx写法
const Item = React.createClass({
    render(){
        return <div>
            <span>one one ! item</span>
            <span>one one ! item</span>
            <span>one one ! item</span>
            <span>one one ! item</span>
            <span>one one ! item</span>
            <span>one one ! item</span>
        </div>

    }
});

// 以下jsx翻译后javascript写法
const Item = React.createClass({
    render(){
        // 第一个参数是元素,第二参数是属性,第三个参数写子元素
        return React.createElement('div',null,
            React.createElement('span',null,'2121'),
            React.createElement('span',null,'2121'),
            React.createElement('span',null,'2121'),
            React.createElement('span',null,'2121'),
            React.createElement('span',null,'2121'),
            React.createElement('span',null,'2121')
        )

    }
});













