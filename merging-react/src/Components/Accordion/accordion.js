import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import './accordion-style.css';

const Example = () => (
  // <div id="accordion-block">
    <Accordion>
        <AccordionItem>
          {/* Product Design */}
            <AccordionItemTitle>
                <h6>Product Design</h6>
            </AccordionItemTitle>
              <AccordionItemBody>
                  <p>Generate Feeder</p>
              </AccordionItemBody>
              <AccordionItemBody>
                  <p>Load Feeder</p>
              </AccordionItemBody>
              <AccordionItemBody>
                  <p>Save Feeder</p>
              </AccordionItemBody>
              <AccordionItemBody>
                  <p>AutoTune</p>
              </AccordionItemBody>
              <AccordionItemBody>
                  <p>Generate Config File</p>
              </AccordionItemBody>
              <AccordionItemBody>
                  <p>Load Config File</p>
              </AccordionItemBody>
              <AccordionItemBody>
                  <p>Save Config File</p>
              </AccordionItemBody>
              <AccordionItemBody>
                  <p>Calculate Fair Value</p>
              </AccordionItemBody>
        </AccordionItem>
        {/* Risk Identification */}
        <AccordionItem>
            <AccordionItemTitle>
                <h6>Risk Identification</h6>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Generate</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Load</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Save</p>
            </AccordionItemBody>
        </AccordionItem>
        {/* Test Plan Design */}
        <AccordionItem>
            <AccordionItemTitle>
                <h6>Test Plan Design</h6>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Generate Test</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Load Test</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Save Test</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Load Contracts</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Generate Test Plan</p>
            </AccordionItemBody>
        </AccordionItem>
        {/* Performance Testing */}
        <AccordionItem>
            <AccordionItemTitle>
                <h6>Performance Testing</h6>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Generate Results</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Load Results</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Save Results</p>
            </AccordionItemBody>
        </AccordionItem>
        {/* Model Report */}
        <AccordionItem>
            <AccordionItemTitle>
                <h6>Model Report</h6>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Generate</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Load</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Save</p>
            </AccordionItemBody>
        </AccordionItem>
        {/* Issues and Limitations */}
        <AccordionItem>
            <AccordionItemTitle>
                <h6>Issues and Limitations</h6>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Generate</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Load</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Save</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Add to Report</p>
            </AccordionItemBody>
        </AccordionItem>
        {/* Risk Score Assessment */}
        <AccordionItem>
            <AccordionItemTitle>
                <h6>Risk Score Assessment</h6>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Generate</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Load</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Save</p>
            </AccordionItemBody>
        </AccordionItem>
        {/* Monitoring */}
        <AccordionItem>
            <AccordionItemTitle>
                <h6>Monitoring</h6>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>Run</p>
            </AccordionItemBody>
            <AccordionItemBody>
                <p>Run All</p>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
  // </div>
);

export class AccordionClass extends React.Component {
    render() {
        return (
            <Example/>
            );
    }
}
