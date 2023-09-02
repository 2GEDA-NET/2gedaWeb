import ProductDescription from '@/components/ProductDescription';
import { useEffect, useState } from 'react';

const ProductPage = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Fetch categories and products from your API
        fetch('https://api.2geda.net/store/outlet-items')
            .then(response => response.json())
            .then(data => {
                setCategories(data.categories);
                setFilteredProducts(data.items.trending);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCategoryChange = categoryId => {
        const productsInCategory = filteredProducts.filter(product =>
            product.category.id === categoryId
        );
        setSelectedCategory(categoryId);
        setFilteredProducts(productsInCategory);
    };

    return (
        <div>
            <div>
                {filteredProducts.map(product => (
                    <ProductDescription key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
