import { useState } from "react";

import IconButton from "@mui/material/IconButton";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import InfoIcon from "@mui/icons-material/Info";
import { IGetPokemonByIdResponse } from "../../../types/types";
import { ModalWindow } from "../../ModalWindow";

export const RowTable = ({
  base_experience,
  id,
  height,
  name,
  stats,
  weight,
}: IGetPokemonByIdResponse) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {<InfoIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="center">{base_experience}</TableCell>
        <TableCell align="center">{height}</TableCell>
        <TableCell align="center">{weight}</TableCell>
      </TableRow>
      <ModalWindow
        stats={stats}
        id={id}
        open={open}
        handleClose={() => setOpen(!open)}
      />
    </>
  );
};
