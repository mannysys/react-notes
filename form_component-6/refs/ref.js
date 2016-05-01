/**
 * Created by shadow on 16/4/30.
 */


const Comp = React.createClass({



    click(){
        // 返回的是input原始对象,触发点击事件后使input获取到焦点
        this.refs.myinput.focus();

    },

    //组件装载之后就获取input焦点
    componentDidMount(){
        this.refs.myinput2.focus();
    },

    // ref={ function(dom){dom.focus();} } 这种方法直接默认获取到input焦点
    render(){
        return <div>
            <input ref={ function(dom){dom.focus();} } />
            <input ref="myinput" />
            <input ref="myinput2" />
            <button onClick={this.click}>click me!</button>
        </div>
    }




});


ReactDOM.render(<Comp/>, document.body);



























