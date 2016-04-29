/**
 * Created by zhoujialin on 2016/4/25.
 */

const Item = React.createClass({

    displayName: 'Item',

    // props 只调用一次
    getDefaultProps(){
        console.log('get default props');
      return {
          group: 123
      }
    },

    // state有多少实列调用（组件）多少次
    getInitialState(){
        console.log('get initial state');
      return {
          name: 'leo'
      }
    },

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
        setInterval(function(){
            if(isYellow){
                dom.style.backgroundColor = 'red';
                isYellow = false;
            }else{
                dom.style.backgroundColor = 'Yellow';
                isYellow = true;
            }
        },1000);

    },


    render(){
        console.log('render');
        return <div>{this.props.group + this.state.name}</div>
    }


});

ReactDOM.render(
    <div>
        <Item/>
    </div>,
    document.body);