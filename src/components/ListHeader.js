"use client";

import { useRouter } from "next/navigation";
import React from "react";

const months = [
  { value: "0", label: "Choose month" },
  { value: "1", label: "Janaury" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const years = [
  { value: "0", label: "Choose month" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
];

const ListHeader = ({ year = "0", month = "0" }) => {
  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();

    const year = event.target.year.value;
    const month = event.target.month.value;

    if (year === "0" || month === "0") return;

    router.push(`/blogs/${year}/${month}`);
  };

  console.log(year, month);

  return (
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-lg text-gray-700">Blogs</h3>

      <form className="flex gap-4" onSubmit={onSubmit}>
        <div className="flex gap-4 items-center">
          <label for="year" class="mb-2 text-sm font-medium">
            Year
          </label>
          <select
            defaultValue={year || "0"}
            id="year"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
          >
            {years.map(({ value, label }) => (
              <option key={value} value={value} selected={value === year}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4 items-center">
          <label for="month" class="mb-2 text-sm font-medium">
            Month
          </label>
          <select
            defaultValue={month || "0"}
            id="month"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
          >
            {months.map(({ value, label }) => (
              <option key={value} value={value} selected={value === month}>
                {label}
              </option>
            ))}
          </select>

          <div className="h-full">
            <button className="h-full px-4 bg-indigo-500 text-white rounded-md">
              Filter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListHeader;
