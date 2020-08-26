import  Link from 'next/link'
import  styles from '../../styles/Home.module.css'
import BackButton from '../buttons/Backbutton'

const headerStyle = {
  padding: "inherit",
  backgroundColor: "inherit",
  color: "black",
  width: "100%",
  height:"50px",
};



const logoStyle = {
  float: "none",
}

const backStyle = {
  position: "absolute",
  top: "15px",
  left: "25px"
}

const itemStyle = {
  textAlign: "center",
  verticalAlign: "middle"
}



const Header = () => (
  <div className="Header" style={headerStyle}>
    <div style={backStyle}> <BackButton /> </div>
    <div style={logoStyle}>
       <Link href="/"> 
    <a><h2 style={itemStyle}>Artisans</h2></a>
     </Link> </div>
  </div>
);

export default Header;