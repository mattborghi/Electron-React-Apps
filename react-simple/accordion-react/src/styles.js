//'use strict';

export default {
    component: {
        width: '50%', //'50%'
        height: '600px',
        display: 'inline-block',
        verticalAlign: 'top',
        padding: '20px',
        margin: 0,
        fontFamily: 'Menlo, Consolas, DejaVu Sans Mono, monospace',
        fontSize:'15px',
        fontWeight:'regular',
        lineHeight:'15px',
        '@media (maxWidth: 640px)': {
            width: '100%',
            display: 'block'
        }
    },
    searchBox: {
        padding: '20px 20px 0 20px'
    },
    viewer: {
        base: {
            fontSize: '12px',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#282C34',
            border: 'solid 1px black',
            padding: '20px',
            color: '#3D9970', //lightgreen
            minHeight: '100%'
        }
    },
    tree: {
        base: {
            listStyle: 'none',
            backgroundColor: '#21252B',
            margin: 0,
            padding: 0,
            color: '#9DA5AB',
            fontFamily: 'Menlo, Consolas, DejaVu Sans Mono, monospace',
            fontSize: '15px',
            minHeight: '100%'
        },
        node: {
            base: {
                position: 'relative'
            },
            link: {
                cursor: 'pointer',
                position: 'relative',
                padding: '0px 5px',
                display: 'block'
            },
            activeLink: {
                background: '#31363F'
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginLeft: '-10px',
                    height: '24px',
                    width: '24px'
                },
                wrapper: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: '-7px 0 0 -7px',
                    height: '14px'
                },
                height: 10,
                width: 10,
                arrow: {
                    fill: '#3D9970',
                    strokeWidth: 5 // 0
                }
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    color: '#3D9970'
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px'
                },
                title: {
                    lineHeight: '24px',
                    verticalAlign: 'middle'
                }
            },
            subtree: {
                listStyle: 'none',
                paddingLeft: '21px'
            },
            loading: {
                color: '#E2C089'
            }
        }
    }
};
