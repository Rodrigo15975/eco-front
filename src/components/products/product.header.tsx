import Image from 'next/image'

export default function ProductosHeader() {
  return (
    <div className="relative w-full h-[600px] bg-slate-700 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1549109926-58f039549485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Productos de seguridad"
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          PRODUCTOS
          <br />
          DISPONIBLES
        </h1>
      </div>
    </div>
  )
}
