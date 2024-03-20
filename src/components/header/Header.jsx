import logo from '../../logo.svg';
import './Header.css';


function Header(){
    return (
    <header className='main-header'>
          <img className='logo' scr={logo} alt="Logo"/>
          <nav className='main-nav'>
            <a className='link' href='/'>Home</a>
            <a className='link' href='/'>About</a>
            <a className='link' href='/'>Contact</a>
           </nav>
        </header>)
}

export { Header }