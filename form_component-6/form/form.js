/**
 * Created by zhoujialin on 2016/4/29.
 */


const Form = React.createClass({

    getInitialState(){
        return {
            inputValue: 'leo',
            inputValue2: '',
            checkboxValue:false,
            radioValue:false,
            selectValue: 'A',
            arr:['B','C']
        }
    },
    // 接收一个event事件对象
    changeHandle(event){
        this.state.inputValue = event.target.value;
        this.forceUpdate(); //刷新
        //如果采用下面这种方式，上面2行代码就省略掉
        //this.setState({inputValue: event.target.value}); //刷新
    },
    changeHandle2(event){
        // 如果我们界面上使用默认的defaultValue的话就不用刷新了，
        // 它不依靠内部state的值进行界面更改了
        this.state.inputValue2 = event.target.value;
    },

    changeCheckboxHandle(){
        // !this.state.checkboxValue  !表示如果是真的就变成假的，如果假的变成真的
        this.setState({checkboxValue: !this.state.checkboxValue});
    },
    changeRadioHandle(){
        this.setState({radioValue: !this.state.radioValue});
    },

    changeSelectHandle(event){
        this.setState({selectValue: event.target.value});
    },
    changeManySelectHandle(event){

        this.setState({arr: this.state.arr.push(event.target.value)});

    },

    // 如果在input使用value的话，需要写对应的内部状态值，进行更新
    render(){
        return <form>
            <input type="text" value={this.state.inputValue} onChange={this.changeHandle} />
            <input type="text" defaultValue="dsad"  onChange={this.changeHandle2} />

            <input type="checkbox" checked={this.state.checkboxValue} onChange={this.changeCheckboxHandle}/>
            <input type="checkbox" defaultChecked/>

            <input type="radio" checked={this.state.radioValue} onChange={this.changeRadioHandle} />
            <select value={this.state.selectValue} onChange={this.changeSelectHandle}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <select multiple value={this.state.arr} onChange={this.changeManySelectHandle}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <textarea value="okok text"></textarea>
        </form>

    }



});


ReactDOM.render(
    <Form/>,
    document.body
);