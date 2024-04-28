import { Search, MoreHorizontal, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { IconButton } from "./icon-button"

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

            <div className="border border-white/10 rounded-lg">
                <table className="w-full">
                    <thead className="">
                        <tr className="border-b border-white/10">
                            <th style={{ width: 48 }} className="px-4 py-3 text-sm font-semibold text-left">
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400" />
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold text-left">Code</th>
                            <th className="px-4 py-3 text-sm font-semibold text-left">Attendde</th>
                            <th className="px-4 py-3 text-sm font-semibold text-left">Registration date</th>
                            <th className="px-4 py-3 text-sm font-semibold text-left">Check-in date</th>
                            <th style={{ width: 64 }} className="px-4 py-3 text-sm font-semibold text-left"></th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className="border-b border-white/10 hover:bg-white/5">
                            <td className="px-4 py-3 text-sm  text-zinc-300">
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400" />
                            </td>
                            <td className="px-4 py-3 text-sm  text-zinc-300">34232</td>
                            <td className="px-4 py-3 text-sm  text-zinc-300">
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-white">Tnoas</span>
                                    <span>tnoas@gmail.com</span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-sm  text-zinc-300">7 days ago</td>
                            <td className="px-4 py-3 text-sm  text-zinc-300">5 days ago</td>
                            <td className="px-4 py-3 text-sm  text-zinc-300">
                                <IconButton transparent>
                                    <MoreHorizontal className="size-4" />
                                </IconButton>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className="px-4 py-3 text-sm font-semibold text-left">Showing 10 of 50 items</td>
                            <td colSpan={3} className="px-4 py-3 text-sm font-semibold text-right">
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


                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}