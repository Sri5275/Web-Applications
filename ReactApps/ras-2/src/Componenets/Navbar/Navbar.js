
import './Navbar.css' 
export default function Navbar1(){
    return(
    <div>
       <nav class="navbar">
          <div class="logo">
            <img src="https://logomakercdn.truic.com/ux-flow/industry/darts-meta.png" alt="LOGO" width="50px" />
            <h4>Target Marraige Bureau</h4>
          </div>

          <ul class="nav-links">
             <div class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">Signup</a></li>
                <li><a href="/">Login</a></li>
             </div>
          </ul>
       </nav>
    </div>
    )
}