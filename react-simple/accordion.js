const TreeView = window["bosket-react"].TreeView

    class App extends React.Component {

        state = {
            category: "children",
            selection: [],
            onSelect: _ => this.setState({ selection: _ }),
            model: [
                { label: "Click me, I'm a node with two children.", children: [
                    { label: "I am a childless leaf." },
                    { label: "I am a also a childless leaf." }
                ]},
                { label: "I'm a leaf, I do not have children." },
                { label: "I am an asynchronous node, click me and wait one second.", children: () =>
                    new Promise(resolve =>
                        setTimeout(() =>
                            resolve([{ label: "It took exactly one second to fetch me the first time, I am cached afterwards." }]), 1000))
                }
            ],
            display: _ => _.label
        }

        render() {
            return (
              <div>
                  <h1>Bosket React</h1>
                  <TreeView { ...this.state }></TreeView>
              </div> 
            )
        }
    }

    ReactDOM.render(<App />, document.getElementById('#root'))