import styles from './Products.module.css'

function Products({name, price, category, inStock, id}) {
    return(
        <div className= {styles.productList}>
            <h2 className={styles.productName}>{name}</h2>
            <h3>Price: ${price}</h3>
            <h4>{inStock ? "Buy Now": "Out of Stock"}</h4>
            <h5><i>{category}</i></h5>
            <h5>Product UPC: {id}</h5>
            <hr />
        </div>
    );
}

export default Products; 