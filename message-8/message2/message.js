/**
 * Created by shadow on 16/5/2.
 */

/*
  组件之间的通信
*/

// 创建事件总线对象
const eventbus = new eventemitter.EventEmitter();

const Comp = React.createClass({

    getInitialState(){
        return {
            colorIndex:0,
            colors:['yellow','red']
        }
    },

    //组件即将要加载
    componentWillMount(){
        //this.state.color = this.state.props;
        eventbus.on('changeColor', (id, color)=> {
            if(this.props.id !== id && this.state.colors[this.state.colorIndex] === color){
                this.changeColor();
            }
        });
    },

    changeColor(){
        this.setState({colorIndex:this.state.colorIndex ? 0 : 1});
        setTimeout( ()=>{
            //发送一个事件
            eventbus.emit('changeColor', this.props.id, this.state.colors[this.state.colorIndex]);
        },1500);
    },
    render(){
        return <div style={{backgroundColor: this.state.colors[this.state.colorIndex]}}>
            <p>{this.props.name}</p>
            <button onClick={this.changeColor}>click me</button>
        </div>


    }

});

ReactDOM.render(<div>
        <Comp id="one"/>
        <Comp id="two"/>
    </div>, document.body);

























