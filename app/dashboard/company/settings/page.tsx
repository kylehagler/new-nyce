import { PageHeader } from '@/components/page-header'

export default function SettingsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
    </div>
  )
}
