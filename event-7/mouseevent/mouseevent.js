/**
 * Created by shadow on 16/5/1.
 */


const data = new Map();

data.set('id001', 'id001');
data.set('id002', 'id002');
data.set('id003', 'id003');
data.set('id004', 'id004');

const DND = React.createClass({


    getInitialState(){
        return {
            dragId: null,
            rightdata: this.props.data,
            leftdata: new Map()
        }


    },
    // 开始拖元素的时候触发事件
    drag(event){
        //将拖动目标的id赋值给状态dragId
        this.state.dragId = event.target.id;

    },
    // 最后放置元素到目标位置时触发事件
    drop(event){
        //拿到拖动元素
        let value = this.state.rightdata.get(this.state.dragId);
        //将拖动的元素添加到leftdata里
        this.state.leftdata.set(this.state.dragId, value);
        //删除源地址的元素
        this.state.rightdata.delete(this.state.dragId);

        this.forceUpdate();

    },
    drop2(event){
        let value = this.state.leftdata.get(this.state.dragId);
        this.state.rightdata.set(this.state.dragId, value);
        this.state.leftdata.delete(this.state.dragId);
        this.forceUpdate();
    },

    render(){

        const rightList = [];
        const leftList = [];

        for(let item of this.state.rightdata){
            /*
                draggable属性规定元素是否可拖动
                onDragStart事件在用户开始拖动元素或选择的文本时触发
              */
            rightList.push(
                <p draggable="true" onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            )
        }
        for(let item of this.state.leftdata){
            leftList.push(
                <p draggable="true" onDragStart={this.drag} id={item[0]}>{item[1]}</p>
            )
        }

        /*
            onDragEnter 在拖动的元素进入到有效的放置目标时触发
            onDragOver 在元素正在拖动到放置目标时触发
            e.preventDefault 是取消事件的默认动作
            onDrop  是拖放事件(元素正在拖动时触发)
         */
        return <div>
            <div id="leftsection"
                 onDragEnter={e=>e.preventDefault()}
                 onDragOver={e=>e.preventDefault()}
                 onDrop={this.drop} >
                {leftList}
            </div>

            <div id="rightsection"
                 onDragEnter={e=>e.preventDefault()}
                 onDragOver={e=>e.preventDefault()}
                 onDrop={this.drop2}>
                {rightList}
            </div>
        </div>
    }

});


ReactDOM.render(<DND data={data} />, document.body);
































