'use client'

import * as React from 'react'
import {
  SmartphoneNfc,
  ShoppingBasket,
  Heart,
  Orbit,
  Cone,
  GalleryVerticalEnd,
  Database,
  Settings,
} from 'lucide-react'

import { NavCompany } from '@/components/nav-company'
import { NavCustomers } from '@/components/nav-customers'
import { NavUser } from '@/components/nav-user'
import { TeamDisplay } from '@/components/team-display'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'

// This is sample data.
const data = {
  user: {
    name: 'Krakt Efron',
    email: 'efronkrakt@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Evil Corp.',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
  ],
  navCompany: [
    {
      title: 'Settings',
      url: '/dashboard/company/settings',
      icon: Settings,
    },
    {
      title: 'Products',
      url: '/dashboard/company/products',
      icon: ShoppingBasket,
    },
    {
      title: 'Subscription',
      url: '/dashboard/company/subscription',
      icon: Orbit,
    },
  ],
  navCustomers: [
    {
      name: 'Data',
      url: '/dashboard/customers/data',
      icon: Database,
    },
    {
      name: 'Funnels',
      url: '/dashboard/customers/funnels',
      icon: Cone,
    },
    {
      name: 'Campaigns',
      url: '/dashboard/customers/campaigns',
      icon: SmartphoneNfc,
    },
    {
      name: 'Deal Nurturing',
      url: '/dashboard/customers/deals',
      icon: Heart,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const navCompanyWithActive = data.navCompany.map((item) => ({
    ...item,
    isActive: pathname === item.url,
  }))

  const navCustomersWithActive = data.navCustomers.map((item) => ({
    ...item,
    isActive: pathname === item.url,
  }))

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamDisplay team={data.teams[0]} />
      </SidebarHeader>
      <SidebarContent>
        <NavCompany items={navCompanyWithActive} />
        <NavCustomers items={navCustomersWithActive} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
