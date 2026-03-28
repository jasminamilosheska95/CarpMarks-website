interface Product {
  name: string;
  feature: string;
  price: string;
  href: string;
}

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto not-prose">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#0A4D68] text-white">
            <th className="text-left px-4 py-3 font-semibold rounded-tl-lg">Product</th>
            <th className="text-left px-4 py-3 font-semibold">Best For</th>
            <th className="text-left px-4 py-3 font-semibold">Price Range</th>
            <th className="text-center px-4 py-3 font-semibold rounded-tr-lg">Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr
              key={i}
              className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-amber-50/40 transition-colors`}
            >
              <td className="px-4 py-3 font-medium text-[#0A4D68]">{p.name}</td>
              <td className="px-4 py-3 text-gray-600">{p.feature}</td>
              <td className="px-4 py-3 text-gray-700 font-medium">{p.price}</td>
              <td className="px-4 py-3 text-center">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-[#FF9900] text-white text-xs font-bold px-3 py-1.5 rounded-md hover:bg-[#e08800] transition-colors whitespace-nowrap"
                >
                  View on Amazon →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
