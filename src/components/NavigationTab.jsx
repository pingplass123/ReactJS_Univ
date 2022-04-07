import React, { useState } from "react";
const Index = () => {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div>
            <div className="relative w-11/12 mx-auto rounded sm:hidden">
                <div className="absolute inset-0 z-0 w-6 h-6 m-auto mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>
                <select aria-label="Selected tab" className="relative z-10 block w-full p-3 text-gray-600 bg-transparent border border-gray-300 rounded appearance-none form-select">
                    <option className="text-sm text-gray-600">inactive </option>
                    <option className="text-sm text-gray-600">inactive </option>
                    <option selected className="text-sm text-gray-600">
                        Active{" "}
                    </option>
                    <option className="text-sm text-gray-600">inactive </option>
                    <option className="text-sm text-gray-600">inactive </option>
                </select>
            </div>
            <div className="flex-wrap justify-between hidden bg-white rounded shadow sm:block">
                <div className="h-12 pl-5 pr-5 xl:w-full xl:mx-0">
                    <ul className="flex">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus === 1 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus === 1 ? "Topics" : "Topics"}</span>
                            {activeStatus === 1 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus === 2 ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"}>
                            <span className="mb-3 cursor-pointer">{activeStatus === 2 ? "Courses" : "Courses"}</span>
                            {activeStatus === 2 && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Index;
