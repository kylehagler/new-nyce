'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

const routes = [
  '/dashboard/company/settings',
  '/dashboard/company/products',
  '/dashboard/company/subscription',
  '/dashboard/customers/data',
  '/dashboard/customers/funnels',
  '/dashboard/customers/campaigns',
  '/dashboard/customers/deals',
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    routes.forEach((route) => {
      router.prefetch(route)
    })
  }, [router])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
