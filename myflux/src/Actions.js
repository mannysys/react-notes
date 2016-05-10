/**
 * Created by shadow on 16/5/8.
 */
//Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，做为区分Symbol值
//通过Symbol函数生成唯一Symbol类型的Symbol值
//使用Symbol值可以作为标识符用于对象的属性名
//在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中。
//const store = Symbol('store');

const Dispatcher = require('./Dispatcher');
const WebAPI = require('./WebAPI');

class Actions{

    add(name){

        WebAPI.getAll(name, function(err){
            let action;
            if(!err){
                action = {
                    actionType: 'add',
                    name
                };
            }else{
                action = {
                    actionType: 'addError',
                    name
                };
            }
            //加入事件调度器Dispatcher
            Dispatcher.dispatch(action);
        });

    }


    //模拟请求api接口数据
    getAll(){

        WebAPI.getAll(function(data){
            var action = {
                actionType:'getAll',
                list:data
            };

            Dispatcher.dispatch(action);
        });

    }


}

module.exports = Actions;