import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className='header'>
         <div className='texts'>
          <h1>
          Pricing
         </h1>
         <p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p></div>
         <div className='boxes'>
          <div class="pricing-table">
            <div className='box'>
              <h1>Free</h1>
              <h2><span>$0</span> / mo</h2>
              <p>10 users included</p>
              <p>2 GB of storage</p>
              <p>Email support</p>
              <p>Help center access</p>
              <button className='signup'>Sign up for free</button>
            </div>
            <div className='box'>
              <h1>Free</h1>
              <h2><span>$0</span> / mo</h2>
              <p>10 users included</p>
              <p>2 GB of storage</p>
              <p>Email support</p>
              <p>Help center access</p>
              <button className='signup'>Sign up for free</button>
            </div>
            <div className='box'>
              <h1>Free</h1>
              <h2><span>$0</span> / mo</h2>
              <p>10 users included</p>
              <p>2 GB of storage</p>
              <p>Email support</p>
              <p>Help center access</p>
              <button className='signup'>Sign up for free</button>
            </div>
          </div>

         </div>
     </div>
     <hr/>
     <div className='footer'>
       <div className='features'>
        <h3>Features</h3>
        <p>Cool stuff</p>
        <p>Random feature</p>
        <p>Team feature</p>
        <p>Stuff for developers</p>
        <p>Another one</p>
        <p>Last time</p>
       </div>
       <div className='features'>
        <h3>Resources</h3>
        <p>Resource</p>
        <p>Resource name</p>
        <p>Another resource</p>
        <p>Final resource</p>
       </div>
       <div className='features'>
        <h3>About</h3>
        <p>Team</p>
        <p>Location</p>
        <p>Privacy</p>
        <p>Terms</p>
       </div>
     </div>
    </div>
  );
}

export default App;
