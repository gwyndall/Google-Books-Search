import React from "react";

class ViewBook extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleView = (props) => {
      const bookLink = this.props.url;
      window.open(bookLink,'_blank');
    }
  
    render() {
      return (
          
        <button onClick={this.handleView}>
          View
        </button>
      );
    }
  }

  export default ViewBook