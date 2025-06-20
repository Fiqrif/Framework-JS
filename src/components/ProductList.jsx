function ProductList({ products }) {
  if (products.length === 0) return <p>Loading...</p>;

  const ProductImage = "https://via.placeholder.com/150";

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
          <img
            src= {product.image || ProductImage}
            alt={product.title}
            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
          />
          <h3 style={{ marginTop: '8px' }}>{product.title}</h3>
          <p style={{ color: '#555' }}>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;