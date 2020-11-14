import React, {useEffect} from "react"

export default function Products(props) {
  const {makeProducts, products} = props
  useEffect(() => {
    makeProducts()
    })

  return (
    <div className="products-content">
      <ul>
        {products.map(p => (
          <li className="products-list">
            <h4>{p.item}</h4>
            <section>
              <img src={p.imageSrc} alt="mask, fins, snorkel, dive computer, or underwater tablet" className={p.item.includes('Fins') ? "fins-img" : "product-img"} />
              <button className="product-btn">Add to cart</button>
            </section>
            <p className="price-text">{'$' + p.price}</p>
            <p className="desc-text">{p.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}