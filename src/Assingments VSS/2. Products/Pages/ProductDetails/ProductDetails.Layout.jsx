import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ProductCard,
  ProductCardImage,
  ProductTitle,
} from "../ProductList/ProductList.Styles";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { meraProductId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `https://fakestoreapi.com/products/${meraProductId}`
      );
      setProduct(result.data);
    })();

    return () => {
      console.log("Unmouting Details");
    };
  }, [meraProductId]);

  return (
    <div>
      <h1>My Products Details: {meraProductId}</h1>
      <hr />
      <div>
        {product?.id && (
          <ProductCard>
            <ProductCardImage src={product.image} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductTitle>$ {product.price}</ProductTitle>
            <ProductTitle>{product.description}</ProductTitle>
          </ProductCard>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
