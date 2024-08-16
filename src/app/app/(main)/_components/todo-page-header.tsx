'use client'

import { DashboardPageHeaderNav } from '@/components/dashboard/page'
import { Button } from '@/components/ui/button'
import { TodoUpsertSheet } from './todo-upsert-sheet'

export default function TodoPageHeaderNav() {
  return (
    <DashboardPageHeaderNav>
      <TodoUpsertSheet>
        <Button>Add todo</Button>
      </TodoUpsertSheet>
    </DashboardPageHeaderNav>
  )
}
