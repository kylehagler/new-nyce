'use client'

import * as React from 'react'

import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar'

export function TeamDisplay({
  team,
}: {
  team: {
    name: string
    logo: React.ElementType
    plan: string
  }
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <team.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{team.name}</span>
            <span className="truncate text-xs">{team.plan}</span>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
