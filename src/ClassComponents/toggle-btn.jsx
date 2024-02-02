import { Component } from "react";

class ToggleBtn extends Component {
  state = {
    isMicrophoneActive: false,
  };

  onMicrophoneToggle = () => {
    this.setState({ isMicrophoneActive: !this.state.isMicrophoneActive });
  };

  render() {
    const { isMicrophoneActive } = this.state;
    return (
      <div
        style={{
          display: "block",
          position: "relative",
          height: "100%",
          textAlign: "center",

          // position: "absolute",
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          // height: "100vh",
          // /* display: "flex",
          // alignItems: "center",
          // justifyContent: "center", */
          // display: "grid",
          // placeItems: "center",
        }}
      >
        <button
          onClick={this.onMicrophoneToggle}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            backgroundColor: this.state.isMicrophoneActive ? "tomato" : "grey",
            color: isMicrophoneActive ? "#fff" : "#000",
          }}
        >
          Mic
        </button>
      </div>
    );
  }
}

export default ToggleBtn;
