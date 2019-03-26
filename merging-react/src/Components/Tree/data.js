//'use strict';
// Absolute paths
// const pathAbsolute = require('path-absolute')
// const currentDir = pathAbsolute('./C:')
// console.log(currentDir)

// const dirTree = require("directory-tree");
// const tree = dirTree('..');
// console.log(__dirname)
// console.log(process.cwd())
// console.log(JSON.stringify(tree))

// const trees = dirTree('C:\\Users\\matiasb\\Desktop\\', {extensions:/\.txt$/}, null, (item, PATH, stats) => {
//     console.log(item);
// });
// console.log(trees)
// console.log(JSON.stringify(trees))

export default {
    name: 'react-treebeard',
    toggled: true,
    children: [
        {
            name: 'example',
            children: [
                { name: 'app.js' },
                { name: 'data.js' },
                { name: 'index.html' },
                { name: 'styles.js' },
                { name: 'webpack.config.js' }
            ]
        },
        {
            name: 'node_modules',
            loading: true,
            children: []
        },
        {
            name: 'src',
            children: [
                {
                    name: 'components',
                    children: [
                        { name: 'decorators.js' },
                        { name: 'treebeard.js' }
                    ]
                },
                { name: 'index.js' }
            ]
        },
        {
            name: 'themes',
            children: [
                { name: 'animations.js' },
                { name: 'default.js' }
            ]
        },
        { name: 'Gulpfile.js' },
        { name: 'index.js' },
        { name: 'package.json' }
    ]
};
