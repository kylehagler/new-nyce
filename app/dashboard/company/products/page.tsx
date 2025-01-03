import { PageHeader } from '@/components/page-header'

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Products</h1>
      </div>
    </div>
  )
}
