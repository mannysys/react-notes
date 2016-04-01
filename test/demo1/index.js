/**
 * Created by zhoujialin on 2016/3/16.
 */

const Item = React.createClass({

    render(){
        return <li className="list-group-item">
                 <a className="right glyphicon glyphicon-edit" href="#"></a>
                 <a className="right glyphicon glyphicon-remove" href="#"></a>
              </li>
    }


});


const ItemEditor = React.createClass({

    render(){
        return <li className="list-group-item">
                 <input className="item-edit"/>
                 <a className="glyphicon glyphicon-share" href="#"></a>
                 <a className="glyphicon glyphicon-remove" href="#"></a>
               </li>
    }



});




const List = React.createClass({

    render(){
        return <div>
                 <button className="btn btn-default">添加</button>
                 <ul className="list-group">
                     <ItemEditor/>
                     <Item/>
                 </ul>
              </div>
    }

});




ReactDOM.render(
    <List/>,
    document.getElementById('example')
);