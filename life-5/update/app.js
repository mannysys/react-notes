/**
 * Created by zhoujialin on 2016/4/25.
 */

const Item = React.createClass({

    displayName: 'Item',

    /*
        组件初始化阶段
     */
    //getDefaultProps是类级别，创建组件类的时候就会调用, 只调用一次
    //所有组件的实例都会共享这个默认的props
    getDefaultProps(){
        console.log('get default props');
      return {
          group: 123
      }
    },
    // 一个实列创建时初始化对象
    // state有多少实列调用（组件）多少次
    getInitialState(){
        console.log('get initial state');
      return {
          name: 'leo'
      }
    },

    /*
        组件装载阶段
     */
    //组件即将要加载
    componentWillMount(){
        console.log('component will mount');
        //可以更改值
        this.state.name = 'liang';
    },
    //组件加载完毕
    componentDidMount(){
        console.log('component did mount');
        // 可以得到渲染之后的DOM
        const dom = ReactDOM.findDOMNode(this);
        //改变dom元素样式颜色
        let isYellow = false;

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



    /*
        组件更新阶段（要传2参数）
        界面更新是依托于内部状态和属性的
     */
    //在组件接收到新的props的时候调用
    //用此函数可以作为react在 prop 传入之后，render()渲染之前更新state的机会
    componentWillReceiveProps(nextProps){
        //在更新阶段该内部方法第一个被调用
        console.log('component will receiveProps');
    },
    //判断nextProps和nextState是否真的已经更新了
    shouldComponentUpdate(nextProps, nextState){
        console.log('should component update');
        return false;

    },
    //更新组件渲染之前
    componentWillUpdate(nextProps, nextState){
        console.log('comonent will update');

        //得到自身的DOM对象（不过是旧dom更新之前的dom）
        //let dom = ReactDOM.findDOMNode(this);

    },
    //更新组件渲染之后
    componentDidUpdate(oldProps, oldState){
        console.log('comonent did update');

        //得到dom是更新之后的
    },
    update(){
        /*
            1）如果使用this.setState更新值的时候，首先会调用shouldComponentUpdate内部方法返回的false的话，
            就不会执行componentWillUpdate和componentDidUpdate两个内部方法
            2）this.forceUpdate()是强制更新，会绕过调用shouldComponentUpdate内部方法
         */
        //this.setState({name:'tiger'});
        this.forceUpdate(); //强制更新值，和上面的this.setState一样
    },



    render(){
        console.log('render');
        return <div>
            {this.props.group + this.state.name}
            <button onClick={this.update}>update</button>
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



function render(bool){

    ReactDOM.render(
        <div>
            <Item/>
            {bool ? <Item/> : ''}
        </div>,
        document.getElementById('test'));

}

//const List = React.createClass({
//    render(){
//        return <div>
//            <Item/>
//        </div>
//    }
//})


render(true);

document.getElementById('clear').onclick = function(){
    render();
};


