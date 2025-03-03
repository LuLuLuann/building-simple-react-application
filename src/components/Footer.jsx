function Footer() {
    return (
        <footer>
            <div>
                <h1 id="footerTitle">Social Links</h1>
                <nav style={{ display: "flex", justifyContent: "space-around" }} onClick={() => alert("clicked")}  >
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;