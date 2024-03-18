import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TableRow, TableCell, Table, TableHead } from "@mui/material";
import { IStat } from "../../types/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
};

interface ModalWindowProps {
  stats: IStat[];
  id: number;
  open: boolean;
  handleClose: () => void;
}

export const ModalWindow = ({
  stats,
  id,
  open,
  handleClose,
}: ModalWindowProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableRow>
            <TableCell
              sx={{
                paddingBottom: 0,
                paddingTop: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "none",
              }}
              colSpan={6}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                width={100}
                height={100}
                alt="pokemon"
              />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "600" }}>Base Stat</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>Effort</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>Stat</TableCell>
                  </TableRow>
                </TableHead>
                {stats?.map(({ base_stat, effort, stat }) => {
                  return (
                    <TableRow key={stat.name}>
                      <TableCell>{stat.name}</TableCell>
                      <TableCell>{base_stat}</TableCell>
                      <TableCell>{effort}</TableCell>
                    </TableRow>
                  );
                })}
              </Table>
            </TableCell>
          </TableRow>
        </Box>
      </Modal>
    </div>
  );
};
