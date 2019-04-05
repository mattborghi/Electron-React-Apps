import React, { Component } from "react";
import { ScrollTo, ScrollArea } from "react-scroll-to";
import ScrollDialog from './autosizer';

export default class MyComponent extends Component {
  render() {
    return (
      <ScrollTo>
        {({ scrollTo }) => (
          <>
            <a onClick={() => scrollTo({ id: "content-two", y: 1000, smooth: true })}>Scroll to Bottom</a>

            <ScrollArea>
                My content 1...
               <ScrollDialog />
            </ScrollArea>

            <ScrollArea id="content-two">
               My long content 2...
               <ScrollDialog />
            </ScrollArea>
          </>
        )}
      </ScrollTo>
    );
  }
}