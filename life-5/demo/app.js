/**
 * Created by zhoujialin on 2016/4/25.
 */
const list = [];
// 临时存储数据
const database = {
    add(article){
        list.push(article);
        return list.length -1;
    },
    del(index){
        list[index] = null;
    },
    update(index,newArticle){
        list.splice(index,1,newArticle);
    },
    get list(){
        return list;
    }
};

const Item = React.createClass({

    displayName: 'Item',

    getDefaultProps(){
      return {
          value: 'no value'
      }
    },
    // 状态初始化
    getInitialState(){
      return {
          value: this.props.value,
          currentHistoryIndex:0,
          history:[this.props.value]
      }
    },

    //组件即将要加载
    componentWillMount(){
        this.state.dbkey = database.add({value:this.state.value});
    },
    //组件加载完毕
    componentDidMount(){
        //改变dom元素样式颜色
        let isYellow = false;
        const dom = ReactDOM.findDOMNode(this);
        //将setInterval加入到状态信息里
        this.state.loopNum = setInterval(function(){
            if(isYellow){
                dom.style.backgroundColor = 'red';
                isYellow = false;
            }else{
                dom.style.backgroundColor = 'Yellow';
                isYellow = true;
            }
        },1000);

    },


    //在组件接收到新的props的时候调用
    //用此函数可以作为react在 prop 传入之后，render()渲染之前更新state的机会
    componentWillReceiveProps(nextProps){
        this.state.value = nextProps.value;

    },
    //判断nextProps和nextState是否真的已经更新了
    shouldComponentUpdate(nextProps, nextState){

        return true;

    },
    //更新组件渲染之前
    componentWillUpdate(nextProps, nextState){
        // update database
        let dbkey = this.state.dbkey;
        database.update(dbkey, {value:this.state.value});

    },
    //更新组件渲染之后
    componentDidUpdate(oldProps, oldState){
        let dom = ReactDOM.findDOMNode(this);
        let oldStyle = dom.style.border;
        dom.style.border = '2px solid red';
        setTimeout(function(){
            dom.style.border = oldStyle;
        },2000);

    },
    update(){

        this.setState({name:'tiger'});
        //this.forceUpdate(); //强制更新值，和上面的this.setState一样
    },

    changeValue(event){
        this.setState({value:event.target.value});

    },

    save(){
        //this.state.history.push = this.state.value; //保存的数组中
        //this.state.currentHistory = this.state.value;
        const value = this.state.value;
        const history = this.state.history;
        const currentHistoryIndex = history.length;

        history.push(value);
        this.setState({
            history,currentHistoryIndex
        });

    },
    prev(){
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if(currentHistoryIndex !== 0){
            currentHistoryIndex -= 1;
            this.setState({currentHistoryIndex});
        }
    },
    next(){
        let currentHistoryIndex = this.state.currentHistoryIndex;
        if(currentHistoryIndex !== this.state.history.length - 1){
            currentHistoryIndex += 1;
            this.setState({currentHistoryIndex});
        }
    },

    render(){
        return <div>
            <div>
                <button onClick={this.prev}>prev</button>
                <span>{this.state.history[this.state.currentHistoryIndex]}</span>
                <button onClick={this.next}>next</button>
            </div>
            <input value={this.state.value} onChange={this.changeValue}/>
            <button onClick={this.save}>save</button>
        </div>
    },


    /*
        组件卸载阶段
     */
    //组件卸载之前调用该内部方法
    componentWillUnmount(){
        console.log('component will Unmount');
        //组件卸载之前，清理掉定时器
        clearInterval(this.state.loopNum);

    }


});

ReactDOM.render(
    <div>
        <Item/>
    </div>,
    document.getElementById('test')
);

