import { Search, MoreHorizontal, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Attendees</h1>
                <div className="w-72 px-3 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0" placeholder="Search attenddees..." />
                </div>
            </div>

            <Table>
                <thead className="">
                    <tr className="border-b border-white/10">
                        <TableHeader style={{ width: 48 }} >
                            <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400" />
                        </TableHeader>
                        <TableHeader >Code</TableHeader>
                        <TableHeader >Attendde</TableHeader>
                        <TableHeader >Registration date</TableHeader>
                        <TableHeader >Check-in date</TableHeader>
                        <TableHeader style={{ width: 64 }} ></TableHeader>
                    </tr>
                </thead>
                <tbody >
                    <TableRow >
                        <TableCell >
                            <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400" />
                        </TableCell>
                        <TableCell >34232</TableCell>
                        <TableCell >
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-white">Tnoas</span>
                                <span>tnoas@gmail.com</span>
                            </div>
                        </TableCell>
                        <TableCell >7 days ago</TableCell>
                        <TableCell >5 days ago</TableCell>
                        <TableCell >
                            <IconButton transparent>
                                <MoreHorizontal className="size-4" />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Showing 10 of 50 items</TableCell>
                        <TableCell colSpan={3} className="text-right">
                            <div className="inline-flex items-center gap-8">
                                <span>page 1 of 5</span>
                                <div className="flex gap-1.5">
                                    <IconButton>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className="size-4" />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}