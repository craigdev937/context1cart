import React from "react";
import "./ProductList.css";
import { ProductCard } from "../cart/ProductCard";

export const ProductList = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);

    const URL = "https://fakestoreapi.com/products";
    React.useEffect(() => {
        setIsLoading(true);
        const getProducts = async () => {
            const res = fetch(URL);
            const products = await (await res).json();
            if (products && products.length > 0) {
                setProducts(products);
                setIsLoading(false);
            };
        };
        getProducts();
    }, []);

    return (
        <main className="Products-wrapper">
            {isLoading ? (
                <section className="Loading">
                    Loading...
                </section>
            ) : (
                products.map((product, index) => (
                    <ProductCard
                        product={product}
                        key={`${index}${product.id}`}
                    />
                ))
            )}
        </main>
    );
};



