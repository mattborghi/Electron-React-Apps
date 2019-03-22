// @flow

import "./ExplorerDemo.css"

import React from "react"

// ExplorerView preset
import { ExplorerView } from "@bosket/react"
// Drag'n'drop utilities
import { dragndrop, utils as dragtools } from "@bosket/core"
// Data model
import model from "self/common/models/ExplorerViewModel"

// Helpers for this demo
import helpers from "./helpers"

export class ExplorerDemo extends React.PureComponent<*, *> {

    // We render the explorer preset of the tree.
    render = () =>
        <ExplorerView
            selection={ this.props.selection }
            { ...this.state }>
        </ExplorerView>

    // Inner state which is passed down as props.
    state = {
        // Data model populating the tree
        model: model,

        // Property of a directory containing its contents
        category: "files",

        // Name property  of a file or directory
        name: "filename",

        // On select event:
        // - update the selection array
        // - update the current directory label
        // - if dropped fron the user fs, get files size
        //
        // For the sake of the demo, the selection array is
        // declared in the parent component.
        onSelect: function(selection: Object[], item: Object, ancestors: Object[], neighbours: Object[]) {
            if(item.files) {
                this.props.update({
                    selection: selection,
                    lastFolder: item,
                    path: "/" + [ ...ancestors, item ]
                        .map(a => a.filename).join("/")
                })
                item.files.filter(f => f.files).forEach(helpers.getFilesSize)
            } else {
                this.props.update({
                    selection: selection,
                    lastFolder: ancestors[ancestors.length - 1],
                    path: "/" + ancestors
                        .map(a => a.filename).join("/")
                })
            }
        }.bind(this),

        // On model update, set state
        updateModel: function(model: Object[]) {
            this.setState({ model: model })
        },

        // Custom icon for displayed files & folders
        display: (item: Object) =>
            <a>
                <i className={"icon fa " + helpers.getIcon(item)}></i>
                { item.filename }
            </a>,

        // Drag and drop config.
        dragndrop: {
            // Custom drop, two possibilites, real files & folders or inner selection.
            drop: (target: Object, event: DragEvent, inputs: Object) => {
                const fsEntries =  dragtools.filesystem(event)
                if(fsEntries) {
                    // Allow real filesystem drop //
                    const targetModel = target ?
                        target[this.state.category] :
                        this.state.model
                    fsEntries.forEach(entry => {
                        helpers.scanFiles.bind(this)(entry, targetModel)
                    })
                    this.setState({ model: this.state.model.slice() })
                } else {
                    // "Standard"" drop //
                    dragndrop.selection(() => this.state.model, m => this.setState({ model: m })).drop(target, event, inputs)
                }
            }
        }
    }

}