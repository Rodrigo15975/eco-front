import ProductGrid from '@/components/products/product.grid'
import ProductosHeader from '@/components/products/product.header'

const Products = () => {
  return (
    <main className="min-h-screen">
      <ProductosHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <ProductGrid />
        </div>
      </div>
    </main>
  )
}

export default Products
