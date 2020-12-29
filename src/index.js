// // import React from "react";
// // import ReactDom from "react-dom";
// // import CommentDetail from "./CommentDetail";
// // import faker from "faker";
// // import ApprovalCard from "./AprovalCard";
// // const App = () => {
// //   return (
// //     <div className="ui container comments">
// //       <ApprovalCard>
// //         <div>
// //           <h4>warning!</h4>
// //           Are you sure you want to do this?
// //         </div>
// //       </ApprovalCard>
// //       <ApprovalCard>
// //         <CommentDetail
// //           author="sam"
// //           timeAgo="today at 4:45PM"
// //           content="Nice blog post"
// //           avatar={faker.image.avatar()}
// //         />
// //       </ApprovalCard>
// //       <CommentDetail
// //         author="alex"
// //         timeAgo="today at 6:00PM"
// //         content="I like subject"
// //         avatar={faker.image.avatar()}
// //       />
// //       <CommentDetail
// //         author="Jane"
// //         timeAgo="yesterday at 2:00PM"
// //         content="good post"
// //         avatar={faker.image.avatar()}
// //       />
// //     </div>
// //   );
// // };

// // ReactDom.render(<App />, document.querySelector("#root"));

// import React from "react";
// import ReactDom from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";
// import "semantic-ui-css/semantic.min.css";
// import Spinner from "./Spinner";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     lat: null,
//     errMessage: "",
//   };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => this.setState({ lat: position.coords.latitude }),
//       (err) => this.setState({ errMessage: err.message })
//     );
//   }

//   renderContent() {
//     if (this.state.lat && !this.state.errMessage) {
//       return (
//         <div>
//           <SeasonDisplay lat={this.state.lat} />
//         </div>
//       );
//     }
//     if (!this.state.lat && this.state.errMessage) {
//       return <div>Error:{this.state.errMessage}</div>;
//     }

//     return <Spinner message="Please accept location request" />;
//   }

//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }

// ReactDom.render(<App />, document.querySelector("#root"));

import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
ReactDom.render(<App />, document.querySelector("#root"));
