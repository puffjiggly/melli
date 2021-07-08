import React from 'react';
// import MainDisplay from '';
import UserQuery from './UserQuery/UserQuery.jsx';

// const App = () => {
//   return (
//     <div>
//       <h1 id ='title'>Melli: Music recommendation application, search by lyrics</h1>
//        {/* <MainContainer></MainContainer> */}
//        </div> 
//   )
// }
class App extends React.Component {
  render () {
    return(
      <div>
      <h1 id ='title'>Melli: Music recommendation application, search by lyrics</h1>
      {/* <MainDisplay></MainDisplay> */}
      <UserQuery></UserQuery>
      </div>

    //   ***!!!!!
    //   Hey! can you please leave the liveshare up ?
    //   ***
    );
  }
}
        
export default App; 

// < |--components
//   | -App
//   | --Main Display
//     | --youtube
//     | --song results
//   | --User Query
//         | --input
//         | --History

//         | --past searchesgit-- >





// import React, { useEffect } from 'react';
// import ReactDom from 'react-dom';
// import AppContainer from './Containers/AppContainer';
// import LoginContainer from './Containers/LoginContainer';
// import SignupContainer from './Containers/SignupContainer';
// import './style.css';
// //import logo from '';
// import { RecoilRoot, useRecoilSnapshot } from 'recoil';
// import { HashRouter, Link, Route, Switch } from 'react-router-dom';

// const mainElement = document.createElement('div');
// mainElement.id = 'root';
// document.body.appendChild(mainElement);

// const App = () => {

//   const handleClick = () => {
//     fetch('http://localhost:3003/electron')
//       .then(res => { return res.json() })
//       .then(data => console.log('data', data))
//       .catch(err => console.log('err', err))
//   };

//   return (
//     <>
//       {/* <center>
//         <img id="SmoreLogo" src={logo}/>
//       </center> */}

//       <h3>State Management Optimization for Recoil</h3>

//       <br></br>
//       <HashRouter>
//         <RecoilRoot>
//           <div className="menu">
//             <Link to="/"><h2>Login</h2></Link>
//             <Link to="/signup"><h2>SignUp</h2></Link>
//             <Link to="/app"><h2>Application</h2></Link>
//           </div>
//           <Switch>
//             <Route exact path="/" component={LoginContainer} />
//             <Route exact path="/signup" component={SignupContainer} />
//             <Route exact path="/app" component={AppContainer} />
//           </Switch>
//         </RecoilRoot>
//       </HashRouter>
//     </>
//   )
// };



// ReactDom.render(<App />, document.getElementById('root'));