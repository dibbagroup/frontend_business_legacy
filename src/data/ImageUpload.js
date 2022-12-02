import React from "react";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base64Data: null
    };
  }

  onChange = e => {
    debugger;
    console.log("file uploaded: ", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      /* reader.readAsBinaryString(file); */
      reader.readAsDataURL(file)
    }
  };

  _handleReaderLoaded = e => {
    console.log("file uploaded 2: ", e);
    console.log(e.target.result)
    let binaryString = e.target.result;
    this.setState({
      base64Data: btoa(binaryString)
    });
  };

  render() {
    const { base64Data } = this.state;
    console.log("base64", this.state);
    return (
      <div>
        <input
          type="file"
          name="image"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={res => this.onChange(res)}
        />

        <p>base64 string: {base64Data}</p>
        <br />
        {base64Data != null && <img src={`data:image;base64,${base64Data}`} />}
      </div>
    );
  }
}

export default ImageUpload;