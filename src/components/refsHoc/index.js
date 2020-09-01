import React from "react";

export default function Hoc(Component) {
  class HocComponent extends React.Component {
    render() {
      const { forwardRef, ...rest } = this.props;
      return <Component forwardRef={forwardRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <HocComponent {...props} forwardRef={ref} />;
  });
}
