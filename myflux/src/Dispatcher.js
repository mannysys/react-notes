/**
 * Created by zhoujialin on 2016/5/10.
 */
/*
 事件调度器

 Action分配到Dispatcher调度器里，然后把action分发到所有注册的store里
 store更改完数据抛出一个事件，我们的组件会监听接收store抛出的，接收到事件后自身就会渲染

 */
const storeCallbackList = [];
const middlewareList = [];

module.exports = {

    //做个中间件
    use(middleware){
        middlewareList.push(middleware);
        return this;
    },
    //store注册事件
    register(storeCallback){
        storeCallbackList.push(storeCallback);
    },

    dispatch(action){
        let index = -1;
        let that = this;

        function next(){
            const middle = middlewareList[++index];
            if(middle){
                middle(action, next);
            }else{
                that._dispatch(action);
            }
        }

        next();

    },

    _dispatch(action){
        for(let callback of storeCallbackList){
            callback(action);
        }
    }

};