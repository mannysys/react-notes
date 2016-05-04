/**
 * Created by shadow on 16/5/2.
 */

/*
  组件之间的通信
*/

// 创建事件总线对象
const eventbus = new eventemitter.EventEmitter();


const Item = React.createClass({

    render(){
        let style = this.props.actived ? {border: "solid 1px green"} : {};
        return <li onClick={this.props.callback} style={style}> {this.props.name}</li>

    }

});

const Comp = React.createClass({

    getInitialState(){
        return {
            list: []
        }
    },

    componentWillMount(){
        //监听事件
        this.props.bus.on('test event', ()=>{
            console.log('test event' + this.props.name);
        });

        this.state.list = this.props.data.map(item=>{
           return {name: item, actived: false}
        });
    },

    // 3秒之后更新子组件Item
    componentDidMount(){
        setTimeout(()=>{
            this.state.list[1].actived = true;
            this.forceUpdate();
        },3000);
    },

    // 点击子组件中元素,调用该父组件callback方法
    callback(item){
        alert(item.name);

    },

    // bind可以指定它的this(表示Item组件上下文),绑定参数item
    render(){
        return <ul>
            {this.state.list.map(item=> <Item callback={this.callback.bind(this,item)} actived={item.actived} name={item.name} />)}
        </ul>
    }


});


const list = [
    'AAA',
    'BBB',
    'CCC',
    'DDD'
]


ReactDOM.render(
    <div>
        <Comp bus={eventbus} name="comp one" data={list}/>
        <Comp bus={eventbus} name="comp two" data={list}/>
    </div>
    , document.body);


setTimeout(function(){
    //触发激活事件
   eventbus.emit('test event');

},5000);


//bower install eventemitter




























