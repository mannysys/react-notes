/**
 * Created by zhoujialin on 2016/5/5.
 */
'use strict';

const React = require('react');

const TreeNode = React.createClass({


    op(){
        var op = this.props.node.data("op");
        this.props.node.data("op", !op);
        this.forceUpdate();
    },
    render(){
        const nodeListDOM = [];
        const node = this.props.node;

        for(let nodeId of this.props.node.childIds){
            //返回子节点
            var childNode = node.getNode(nodeId);
            nodeListDOM.push(<TreeNode key={childNode.id} node={childNode} />)

        }

        const op = this.props.node.data('op');

        return node.isRoot() ? <ul>
                {nodeListDOM}
            </ul> :
            <li>
                <h3><a href="javascript:;" onClick={this.op}>{op ? '-' : '+'}</a>{node.data('title')}</h3>
                <ul style={{display:op ? 'block' : 'none'}}>
                    {nodeListDOM}
                </ul>
            </li>;

    }




});

module.exports = TreeNode;