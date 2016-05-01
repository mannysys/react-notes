/**
 * Created by shadow on 16/4/30.
 */


const Comp = React.createClass({

    getInitialState(){
        return {
            name: ''
        }
    },

    changeHandle(event){
        this.setState({name: event.target.value});

        // 调用自定义事件onChangeName 并传参
        this.props.onChangeName(this.state.name);

    },

    render(){
        return <div>
            <input type="text" value={this.state.name} onChange={this.changeHandle} />
        </div>
    }




});


function changeNameHandle(name){

    console.log(name);

}

// 自定义事件onChangeName

ReactDOM.render(<Comp onChangeName={changeNameHandle} />, document.body);



























