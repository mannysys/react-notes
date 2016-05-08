/**
 * Created by shadow on 16/5/8.
 */

const React = require('react');
const Store = require('./Store');

const store = new Store();


class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
    };


    add(){
        Actions.add(this.refs.nameInput.value);

        // -> dispacther(协调下发给stores) -> stores

    }

    //组件已经加载的
    //然后监听着数据有没有更改,如果更改了就重新渲染数据
    componentDidMount(){
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



















