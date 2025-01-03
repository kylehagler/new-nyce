'use client'

import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useRouter } from 'next/navigation'

export function NavCompany({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const router = useRouter()

  const handleMouseEnter = (url: string) => {
    router.prefetch(url)
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Company</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem
            key={item.title}
            onMouseEnter={() => handleMouseEnter(item.url)}
          >
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
