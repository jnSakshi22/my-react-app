import Lottie from "lottie-react";
import NetworkView from "../../components/Templates/NetworkViews/NetworkView.Component";
import { ProductsContainer, ProductsSection } from "./Products.Styles";
import ShoppingAnimation from "../../assets/animations/shopping.json";

const Products = () => {
  return (
    <NetworkView>
      <ProductsContainer>
        <ProductsSection>
          <Lottie animationData={ShoppingAnimation} loop={true} />
          <p>Let us shop now 😊</p>
        </ProductsSection>
      </ProductsContainer>
    </NetworkView>
  );
};

export default Products;
