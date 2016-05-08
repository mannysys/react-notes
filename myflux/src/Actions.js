/**
 * Created by shadow on 16/5/8.
 */

const store = Symbol('store');

class Actions{

    constructor(_store){

        this[store] = _store;

    }

    add(name){
        this[store]._add(name);
    }




}