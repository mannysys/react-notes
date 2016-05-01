/**
 * Created by shadow on 16/4/30.
 */


const Comp = React.createClass({

    getInitialState(){
        return {
            top:0,
            left:0
        }
    },
    keyup(event){
        /*
            event.keyCode是返回键码值(键盘对应数字值)
            37 向左
            39 向右
            38 向上
            40 向下
         */
        switch(event.keyCode){
            case 37:
                this.setState({left:this.state.left-5});
                break;
            case 38:
                this.setState({top:this.state.top-5});
                break;
            case 39:
                this.setState({left:this.state.left+5});
                break;
            case 40:
                this.setState({top:this.state.top+5});
                break;
        }

    },

    // ref 获取自身焦点,dom是返回自身对象
    // tabIndex属性表示可以用tab键控制次序
    render(){
        return <div ref={dom => {if(dom) dom.focus()}} style={{position:"relative",width:"450px",height:"450px",background:"yellow"}}
                    tabIndex={1} onKeyDown={this.keyup} >
            <div style={{top:this.state.top+'px',left:this.state.left+'px',position:"absolute",width:"10px",height:"10px",background:"red"}}></div>
        </div>
    }




});


ReactDOM.render(<Comp/>, document.body);



























