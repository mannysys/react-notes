/**
 * Created by zhoujialin on 2016/5/4.
 */

const LinkedStateMixin = React.addons.LinkedStateMixin;

// 数据双向绑定
const Comp = React.createClass({
    displayname: 'Comp',

    mixins:[LinkedStateMixin],

    getInitialState(){
        return {
            name:''
        }
    },

    render(){
        return <div>
            {this.state.name}
            <input type="text" valueLink={this.linkState('name')} />
        </div>
    }



});


ReactDOM.render(<Comp/>, document.body);