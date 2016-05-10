/**
 * Created by shadow on 16/5/8.
 */

const React = require('react');
const Store = require('./Store');
const Actions = require('./Actions');
const actions = new Actions();
const store = new Store();

class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    };


    add(){
        actions.add(this.refs.nameInput.value);

        // -> dispacther(协调下发给stores) -> stores
    }

    //组件已经加载的
    //然后监听着数据有没有更改,如果更改了就重新渲染数据
    componentDidMount(){

        actions.getAll();

        store.on('change', list=>{
            this.setState({list});
        })

    }

    render(){
        return <ul>
            {this.state.list.map(item=><li>{item}</li>)}
            <li>
                <input ref="nameInput" />
                <button onClick={this.add.bind(this)} > add </button>
            </li>
        </ul>



    }

}

module.exports = List;




/*
 执行流程：
 我们点击 add 触发事件调用方法add执行 actions类调用add方法并传入输入的数据，
 在Actions类执行add方法创建一个action对象然后抛出一个事件create携带数组数据，这个事件被我们Store类监听到
 并接收处理，将携带的数据传入调用_add方法中添加到_list数组中，然后创建抛出一个事件change携带_list数组，这个事件
 被List监听到并接收处理，然后改成自身的状态this.setState 渲染组件

 */


/*
 flux 概念
 List是一个UI React组件（代表用户）我们控制它产生一个actions事件动作，
 然后调用由 Dispatcher 调度器注册了很多 Store（和数据相关的），调用完成后通过循环的方式，
 这些Store通过根据事件改变的值，然后数据改变了发送事件，react ui组件监听 Store 数据改变的这些事件，
 然后他们就形成了这样的数据循环
 */











