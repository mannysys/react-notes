/**
 * Created by zhoujialin on 2016/3/14.
 */


/*
   React.createClass创建类相当于一个标签
*/

//Item
const Item = React.createClass({
    render(){
        return <li className="list-group-item">
                Cras justo odio
                <a className="right glyphicon glyphicon-edit" href="#"></a>
                <a className="right glyphicon glyphicon-remove" href="#"></a>
               </li>
    }
});

//ItemEditor
const ItemEditor = React.createClass({
    render(){
        return <li className="list-group-item">
                <input type="text" className="item-edit"/>
                <a className="glyphicon glyphicon-share" href="#"></a>
                <a className="glyphicon glyphicon-remove" href="#"></a>
               </li>

    }
});

//List
const List = React.createClass({
    render(){
        return <div>
                  <button className="btn btn-default">Add</button>
                  <ul className="list-group">
                    <Item />
                    <ItemEditor/>
                  </ul>
               </div>

    }
});

ReactDOM.render(
    <List/>,
    document.getElementById('test')
)





































