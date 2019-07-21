import React from "react";


class SaveBook extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        const bookLink = this.props.url;
      console.log('Link:', bookLink);

            // console.log(response.data.volumeInfo);
    };

   
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Save
        </button>
      );
    }
};

  export default SaveBook