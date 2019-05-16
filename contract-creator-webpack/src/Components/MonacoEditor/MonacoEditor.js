import React, { Component } from "react";
import PropTypes from "prop-types";
import dedent from "dedent";

class MonacoEditor extends Component {
  // @todo: Use typescript to handle propTypes via monaco.d.ts
  // (https://github.com/Microsoft/monaco-editor/blob/master/monaco.d.ts):
  static propTypes = {
    // Styles props:
    style: PropTypes.object,
    className: PropTypes.string,
    height: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
    width: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),

    // Preferences props:
    language: PropTypes.string,
    theme: PropTypes.string,
    // theme: PropTypes.oneOf([
    //   'vs',
    //   'vs-dark',
    //   'hc-black'
    // ]),

    // Lifecycle props:
    didLoad: PropTypes.func,
    didMount: PropTypes.func
  };
  static defaultProps = {
    // width: 600, // auto
    height: "100%",
    language: "javascript",
    theme: "vs-dark",
    automaticLayout: true,
    didLoad: () => {},
    didMount: () => {}
  };

  componentDidMount() {
    this.handleLoad();
  }

  containerDidMount = ref => {
    this.ref = ref;
  };

  handleLoad() {
    // @note: safe to not check typeof window since it'll call on componentDidMount lifecycle:
    if (!window.require) {
      const loaderScript = window.document.createElement("script");
      loaderScript.type = "text/javascript";
      // @note: Due to the way AMD is being used by Monaco, there is currently no graceful way to integrate Monaco into webpack (cf. https://github.com/Microsoft/monaco-editor/issues/18):
      loaderScript.src = "https://unpkg.com/monaco-editor/min/vs/loader.js";
      loaderScript.addEventListener("load", this.didLoad);
      window.document.body.appendChild(loaderScript);
    } else {
      this.didLoad();
    }
  }

  handleMount() {
    const { language, theme, automaticLayout } = this.props;

    const editor = window.monaco.editor.create(this.ref, {
      value: dedent`Product:
                    Exp:
                      type: expiry_payoff
                      input:
                        underlier: asian1
                      contract_data:
                        k:
                        derivative_type:

                    Asian:
                      type: average
                      input:
                        underlier: basket1
                      output:
                        name: asian1


                    Basket:
                      type: weighted_basket
                      input:
                        underlier1: s1
                        underlier2: s2
                        underlier3: s3
                      output:
                        name: basket1
                      contract_data:
                        w_underlier1:
                        w_underlier2:
                        w_underlier3:

                  Schedule:
                    # Observation settings:
                    obs: {to: , tn: , f: }
                    BasketAsian:
                      expiry:
                      payment:
                    Asian:
                      average: {to: , tn: , f: }
                    Basket:
                      basket: {to: , tn: , f: }

                  Process:
                    s1:
                      type: default
                      equation: euler
                      market_data:
                        initial:
                        mu:
                        sigma:

                    s2:
                      type: default
                      equation: euler
                      market_data:
                        initial:
                        mu:
                        sigma:

                    s3:
                      type: default
                      equation: euler
                      market_data:
                        initial:
                        mu:
                        sigma:


                  Market data:
                    discount_value:

                  Algorithmic data:
                    MC parameters:
                      paths:

                    Process parameters:
                      steps_per_year:
                      random_number_generator:
                        type: mersenne
                        moment_matching: False
                        antithetic: False

                  Output requests:
                    Event verbose:
                      print_event_verbose: False
                    Engine verbose:
                      print_iterations: False
                      computation_time: True
                      fair_value_stats: True
                      print_simu_stats: False
                    Calculation request:
                      fair_value: True
                      simulation_stats: True

`,
      language,
      theme,
      automaticLayout,
    });

    monaco.editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
    rules: [{ background: 'EDF9FA' }],
    colors: {
        'editor.foreground': '#000000',
        'editor.background': '#EDF9FA',
        'editorCursor.foreground': '#8B0000',
        'editor.lineHighlightBackground': '#0000FF20',
        'editorLineNumber.foreground': '#008800',
        'editor.selectionBackground': '#88000030',
        'editor.inactiveSelectionBackground': '#88000015'
    }
    });

    monaco.editor.setTheme('vs-dark'); // vs-dark, vs-light, myTheme

    this.didMount(editor);

    return editor;
  }

  didMount = editor => {
    const { didMount } = this.props;

    didMount(editor);
  };

  didLoad = e => {
    const { didLoad } = this.props;
    window.require.config({
      paths: { vs: "https://unpkg.com/monaco-editor/min/vs" }
    });
    window.require(["vs/editor/editor.main"], () => {
      this.handleMount();
    });

    didLoad();

    if (e) {
      e.target.removeEventListener("load", this.didLoad);
    }
  };

  render() {
    const { className, style, width, height } = this.props;

    return (
      <div
        ref={this.containerDidMount}
        className={className}
        style={{
          height,
          width,
          //marginTop: 45, // hardcoded so the code is seen as a whole
          ...style
        }}
      />
    );
  }

}

export default MonacoEditor;
