
//const exf = {
//    test(){
//        alert('ok text mixins!' + this.props.group);
//    }
//};

//const Item = React.createClass({
//
//    // 是设置组件的名字,这个可以作为测试,在渲染时react内部会自动设置的
//    displayName: 'Item', // test
//
//    // 默认提供props值,如果在组件Item上最外层设置了值group="hello",将会使用该值
//    getDefaultProps(){
//        return {
//            group: 'javascript'
//        }
//    },
//
//    // 状态机,可以指定一个初始化
//    getInitialState(){
//        return {
//            result:123
//        }
//    },
//
//
//    //混合写法,等价于以下test方法(表示把方法写到外部,然后在这里调用)
//    mixins: [exf],
//
//    //test(){
//    //
//    //},
//
//    // prototype
//    render(){
//
//        // jsx语法
//        return <div>{this.props.group}
//
//            <button onClick={this.test}> click me!</button>
//        </div>;
//
//        //return React.createElement('div', null, this.props.group);
//    }
//
//
//});


// ES6写法
class Item extends React.Component{

    constructor(props){
        super(props);
        // 等价于以上的getInitialState
        this.state = {
            result: 123
        }
    }


    static defaultProps(){
        return {
            group: 'javascript'
        }
    }
    // 在es6里不支持混合写法,所以方法要写在类里面
    test(){
        alert('on test' + this.props.group);

    }

    render() {

        //react无法自动绑定es6类写法的this,所以手动指定绑定{this.test.bind(this)}
        return <div>{this.props.group}

            <button onClick={this.test.bind(this)}>click me!</button>
        </div>

    }


}



ReactDOM.render(<Item group="hello"/>, document.body);


















































