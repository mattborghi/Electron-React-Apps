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
    const { language, theme } = this.props;

    const editor = window.monaco.editor.create(this.ref, {
      value: dedent`Product:
                Exp:
                  type: expiry_payoff
                  input:
                    underlier: s1
                  contract_data:
                    k: 0.95
                    derivative_type: c

                early01:
                  type: early_exercise
                  input:
                    underlier: s1
                  equation: k
                  contract_data:
                    k: 1
                  others:
                    class: callable

              Schedule:
                # Observation settings:
                obs: {to: 0, tn: 252, f: 1}
                Exp:
                  expiry: [252]
                  payment: 0
                early01:
                  ee_sch: [20, 30]

              Process:
                s1:
                  type: default
                  equation: euler
                  market_data:
                    initial: 100
                    mu: 0.03
                    sigma: 0.05

              Market data:
                discount_value: 0.02

              Algorithmic data:
                MC parameters:
                  paths: 50

                Process parameters:
                  steps_per_year: 252
                  random_number_generator:
                    type: mersenne
                    moment_matching: False
                    antithetic: False

              Output requests:
                Calculation request:
                  computation_time: True
                  fair_value: True
                  simulation_stats: False
                  store_simulations: True
                Engine verbose:
                  print_iterations: False
                  computation_time: True
                  fair_value_stats: True
                  print_simu_stats: False
                  print_last_event_log: True`,
      language,
      theme
    });

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
          ...style
        }}
      />
    );
  }
}

export default MonacoEditor;
