/**
 * Created by zhoujialin on 2016/5/5.
 */
'use strict';
const React = require('react');
const TNode = require('tree-node');
const TreeNode = require('./TreeNode');

const Tree = React.createClass({

    getInitialState(){
        return {
            treeData: new TNode
        }

    },
    componentWillMount(){
        if(this.props.json){
            this.state.treeData.reborn(this.props.json)
        }

    },
    render(){
        const nodeListDOM = [];

        const node = this.props.node;
        for(let nodeId of this.state.treeData.childIds){
            //返回子节点
            var childNode = this.state.treeData.getNode(nodeId);
            nodeListDOM.push(<TreeNode key={childNode.id} node={childNode.json} />)

        }

        return <ul>
            {nodeListDOM}
        <ul/>

    }




});

module.exports = Tree;