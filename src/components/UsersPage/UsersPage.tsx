import { DataTable } from "./data-table"
import {columns} from "./columns"
import { payments } from "@/data/tableData"
import AppLayout from "../AppLayout"
const UsersPage = () => {
  return (
      <AppLayout>
      <DataTable columns={columns} data={payments}/>
      </AppLayout>
  )
}

export default UsersPage