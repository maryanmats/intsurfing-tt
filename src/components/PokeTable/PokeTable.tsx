import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

import { Loader } from "../Loader";

import { ActionsTable } from "./ActionsTable";
import { HeaderTable } from "./HeaderTable";
import { RowTable } from "./RowTable";

import { ROWS_PER_PAGE_OPTIONS } from "../../constants/headerCells";
import { useTable } from "../../services/hooks/useTable";

export const PokeTable = () => {
  const {
    count,
    isFetching,
    handleChangePage,
    handleChangeRowsPerPage,
    handleRequestSort,
    order,
    orderBy,
    page,
    rowsPerPage,
    visibleRows,
  } = useTable();

  if (isFetching > 0) return <Loader />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <HeaderTable
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {visibleRows?.map((pokemon) => {
            // @ts-ignore
            return <RowTable key={pokemon.name} {...pokemon} />;
          })}

          <TablePagination
            ActionsComponent={ActionsTable}
            colSpan={6}
            count={count ?? 0}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
            slotProps={{
              select: {
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              },
            }}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
