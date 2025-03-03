import styles from './Header.module.css'

function Header() {

    return (
      <header>
        <div>
          <h1 className = {styles.storeName}>Loopy Lu's </h1>
        {/* <h2>Lose yourself at Lu's</h2> */}
        <h2 className ={styles.storeMotto}>Infinitely good prices</h2>
        </div>
        
        <nav style={{ display: "flex", justifyContent: "space-around" }} onClick={() => alert("clicked")}  >
        <a href="#">Home</a>
        <a href="#">Products</a>
        </nav>
      </header>

    )
  }
  
  export default Header