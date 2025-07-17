import React from 'react'
import { FaRegChartBar } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FaCalendarAlt } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdClock } from "react-icons/io";






const DashBoard = () => {
    return (
        <div className='p-1'>
            <div className="card w-full bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">Recruitment Analysis</h2>
                        <div className='flex items-center'>
                            <select defaultValue="Last 30 Days" className="select w-50">
                                <option disabled={true}>Last 30 Days</option>
                                <option>Last 90 Days</option>
                                <option>Last 6 Months</option>
                                <option>Last 1 Year</option>
                            </select>
                            <FaRegChartBar className='size-5 ml-2 text-[#88A0F3]' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        <div className="card bg-base-100 border-2 border-gray-300 p-5">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <HiOutlineOfficeBuilding className="w-6 h-6 text-purple-600" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-gray-600 mb-2">
                                        Open Positions
                                    </h3>

                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        5
                                    </div>

                                    <div className="text-sm text-blue-600">
                                        3 added this week
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 border-2 border-gray-300 p-5">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <FaCalendarAlt className="w-6 h-6 text-orange-500" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-gray-600 mb-2">
                                       Interviews
                                    </h3>

                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        5
                                    </div>

                                    <div className="text-sm text-blue-600">
                                        3 added this week
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 border-2 border-gray-300 p-5">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <MdPeopleAlt className="w-6 h-6 text-green-600" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-gray-600 mb-2">
                                        New Hires
                                    </h3>

                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        5
                                    </div>

                                    <div className="text-sm text-blue-600">
                                        3 added this week
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 border-2 border-gray-300 p-5">
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <IoMdClock className="w-6 h-6 text-blue-500" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-base font-medium text-gray-600 mb-2">
                                        Awaiting feedback
                                    </h3>

                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        5
                                    </div>

                                    <div className="text-sm text-blue-600">
                                        3 added this week
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card mt-6 bg-base-100 shadow-sm'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Brice Swyre</div>
                                            <div className="text-sm opacity-50">China</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Carroll Group
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                </td>
                                <td>Red</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Marjy Ferencz</div>
                                            <div className="text-sm opacity-50">Russia</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Rowe-Schoen
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                </td>
                                <td>Crimson</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Yancy Tear</div>
                                            <div className="text-sm opacity-50">Brazil</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Wyman-Ledner
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                </td>
                                <td>Indigo</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                        {/* foot */}
                        {/* <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot> */}
                    </table>
                </div>
                <div>
                    {/* <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
                        <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                        <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                        <calendar-month></calendar-month>
                    </calendar-date> */}
                </div>
            </div>
        </div>
    )
}

export default DashBoard