// pages/product/[productId].js
import { useRouter } from 'next/router';
import ProductDescription from '@/components/ProductDescription'; // Adjust path as needed
import trendingData from '@/data/trendingData'; // Import your product data

const ProductPage = () => {
    const router = useRouter();
    const { productId } = router.query;

    const product = trendingData.find(item => item.id === Number(productId));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <ProductDescription product={product} />
        </div>
    );
};

export default ProductPage;
