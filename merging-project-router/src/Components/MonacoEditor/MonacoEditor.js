import React, { Component } from "react";
import PropTypes from "prop-types";

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
      value: "// @note: Ayoub test editor",
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
