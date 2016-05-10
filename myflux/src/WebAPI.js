/**
 * Created by zhoujialin on 2016/5/10.
 */


module.exports = {

    getAll(callback){
        setTimeout(function(){
            callback(['aaa','bbb','ccc']);
        },2000)
    }


}