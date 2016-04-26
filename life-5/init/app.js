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

    render(){
        return <div>{this.props.group + this.state.name}</div>
    }


});

ReactDOM.render(
    <div>
    <Item/>
    <Item/>
    <Item/>
    </div>,
    document.body);