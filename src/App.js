import './App.css';

function App() {
	return (
		<>
        <div className="mycls">
             <div className="logoS">
                 <img src="/" alt="logo" />
                 <div className="fMenu" >
                     <ul className="adminD">
                       <li><a href="#">Language </a></li>
                       <li><a href="#">Sign Up </a></li>
                       <li><a href="#">Log In </a></li>
                     </ul>
                 </div>
             
             </div>
             <div className="menuM">
                   <div className="menuI">
                       <span id="menuIcon">
                           
                       </span>
                       <span id="homeB">
                           <p>Home</p>
                           <p>●</p>
                           <p>Hotels</p>
                           <p>Restaurants</p>
                       </span>
                   </div>
 
                   <div className="menuS">
                       <span id="underratedP">
                           <p>Underrated Places </p>
                       </span>
                       <span id="emergencyN">
                           <p>Emergency Number </p>
                       </span>
                   </div>
                   </div>
             </div>
        </div>
		</>
	);
}

export default App;
