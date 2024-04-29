import { Search, MoreHorizontal, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"
import { useState } from "react"
import { attendees } from "../mocks/attendees"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function AttendeeList() {

    const totalPages = Math.ceil(attendees.length / 10)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    function goToNextPage(){
        setPage(page + 1)
    }
    
    function goToPrevPage(){
        setPage(page - 1)
    }
    
    function goToLastPage(){
        setPage(totalPages)
    }
    
    function goToFirstPage(){
        setPage(1)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Attendees</h1>
                <div className="w-72 px-3 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm ring-0" onChange={(e) => setSearch(e.target.value)} placeholder="Search attenddees..." />
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
                    {
                        attendees.slice((page - 1) * 10,page * 10).map((attendee) => {
                            return (
                                <TableRow key={attendee.id}>
                                    <TableCell >
                                        <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400" />
                                    </TableCell>
                                    <TableCell >{attendee.id}</TableCell>
                                    <TableCell >
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-white">{attendee.name}</span>
                                            <span>{attendee.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell >{ dayjs().to(attendee.createdAt) }</TableCell>
                                    <TableCell >{ dayjs().to(attendee.checkedInAt) }</TableCell>
                                    <TableCell >
                                        <IconButton transparent>
                                            <MoreHorizontal className="size-4" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Showing 10 of {attendees.length} items</TableCell>
                        <TableCell colSpan={3} className="text-right">
                            <div className="inline-flex items-center gap-8">
                                <span>page 1 of {totalPages}</span>
                                <div className="flex gap-1.5">
                                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                        <ChevronsLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToPrevPage} disabled={page === 1}>
                                        <ChevronLeft className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                                        <ChevronRight className="size-4" />
                                    </IconButton>
                                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
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