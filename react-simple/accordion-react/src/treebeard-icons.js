//'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Treebeard, decorators} from 'react-treebeard';
import styled from '@emotion/styled';


import data from './data';
import styles from './styles';
import * as filters from './filter';

const div = styled('div', {
    shouldForwardProp: prop => ['className', 'children'].indexOf(prop) !== -1
})(({ style }) => style);

const HELP_MSG = 'Select A Node To See Its Data Structure Here...';

// Example: Customising The Header Decorator To Include Icons
decorators.Header = ({style, node}) => {
    const iconType = node.children ? 'folder' : 'file-text';
    const iconClass = `fa fa-${iconType}`;
    const iconStyle = {marginRight: '5px'};

    return (
        <div style={style.base}>
            <div style={style.title}>
                <i className={iconClass} style={iconStyle}/>
                {node.name}
            </div>
        </div>
    );
};

decorators.Toggle = ({style, node}) => {
  const {height, width} = style;
  const newWidth = width * 0.8;
  const newHeigth = height * 0.8;
  const midHeight = newHeigth * 0.5;
  const thick = newHeigth * 0.2;
  const thickHeight = newHeigth - thick;
  const thickWidth = newWidth - thick;
  const points = `0,0 ${newWidth},${midHeight} 0,${newHeigth} 0,${thickHeight} ${thickWidth},${midHeight} 0,${thick}`;

  return (
            <div style={style.base}>
              <div style={{...style.wrapper, display: 'flex'}}>
                <svg height={height} width={width}>
                  <polygon points={points} style={style.arrow} />
                </svg>
              </div>
            </div>
        );
};

class NodeViewer extends React.Component {
    render() {
        const style = styles.viewer;
        let json = JSON.stringify(this.props.node, null, 4);

        if (!json) {
            json = HELP_MSG;
        }

        return <div style={style.base}>{json}</div>;
    }
}
NodeViewer.propTypes = {
    node: PropTypes.object
};

class DemoTree extends React.Component {
    constructor() {
        super();

        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        const {cursor} = this.state;

        if (cursor) {
            cursor.active = false;
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }

        this.setState({cursor: node});
    }

    onFilterMouseUp(e) {
        const filter = e.target.value.trim();
        if (!filter) {
            return this.setState({data});
        }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }

    render() {
        const {data: stateData, cursor} = this.state;

        return (
            <div>
                <div style={styles.searchBox}>
                    <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-search"/>
                        </span>
                        <input className="form-control"
                               onKeyUp={this.onFilterMouseUp.bind(this)}
                               placeholder="Search the tree..."
                               type="text"/>
                    </div>
                </div>
                <div style={styles.component}>
                    <Treebeard data={stateData}
                               decorators={decorators}
                               onToggle={this.onToggle}
                               style={styles}
                    />
                </div>
                <div style={styles.component}>
                    <NodeViewer node={cursor}/>
                </div>
            </div>
        );
    }
}

const content = document.getElementById('content-icons');
ReactDOM.render(<DemoTree/>, content);
