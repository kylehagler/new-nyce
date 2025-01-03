'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'

export function PageHeader() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const getBreadcrumbData = () => {
    const section = segments[1] // 'company' or 'customers'
    const page = segments[2] // 'settings', 'products', etc.

    return {
      section: section?.charAt(0).toUpperCase() + section?.slice(1) || '',
      page: page?.charAt(0).toUpperCase() + page?.slice(1) || '',
    }
  }

  const { section, page } = getBreadcrumbData()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href={`/dashboard/${segments[1]}`}>
              {section}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{page}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
