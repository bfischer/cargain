"use client";

import { Pagination } from "flowbite-react";
import React from "react";

type AppPaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChanged: (page: number) => void;
};

export default function AppPagination({
  currentPage,
  pageCount,
  onPageChanged,
}: AppPaginationProps) {
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={(e) => onPageChanged(e)}
      totalPages={pageCount}
      layout="pagination"
      showIcons={true}
      className="text-blue-500 mb-5"
    />
  );
}
