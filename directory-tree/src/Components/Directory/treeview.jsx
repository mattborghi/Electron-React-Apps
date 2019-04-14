import React, { Component } from 'react';
import dirTree from 'directory-tree'; // use this instead of 'readdirp`


export default class TreeView extends Component {
    constructor() {
        super();

        this.state = {
            tree: null //initialize tree
        }

        this.renderTreeNodes = this.renderTreeNodes.bind(this);
    }

    componentWillMount() {
        const { root } = this.props;
        const tree = dirTree(root);
        console.log(tree);

        this.setState({ tree });
    }

    renderTreeNodes(children) {
        if (children.length === 0) return null;

        return (
            children.map(child => {
                return (
                    <div key={child.path} id={child.path}>
                        { child.hasOwnProperty('children') && child.type === 'directory'?
                            this.renderTreeNodes(child.children) : null}
                    </div>
                )
            })
        )
    }

    render() {
        const { tree } = this.state;

        return (
            <div id="default">
                <div id={tree.path}>
                    { this.renderTreeNodes(tree.children) }
                </div>
            </div>
        );
    }

}