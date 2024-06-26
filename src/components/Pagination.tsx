import { Box, Button, Typography } from "@mui/material";

export interface PaginationProps {
 page: number;
 handlePageChange: (newPage: number) => void;
 hasMorePages: boolean;
}

const Pagination = ({ page, handlePageChange, hasMorePages }: PaginationProps) => {
 return (
  <Box
   display={"flex"}
   alignItems={"center"}
   justifyContent={"center"}
   marginTop={2}
   gap={2}
  >
   <Button
    disabled={page === 1}
    onClick={() => handlePageChange(page - 1)}
    variant="outlined"
   >
    &#11164;
   </Button>
   <Typography variant="subtitle1">{page}</Typography>
   <Button
    disabled={!hasMorePages}
    onClick={() => handlePageChange(page + 1)}
    variant="outlined"
   >
    &#11166;
   </Button>
  </Box>
 );
};

export default Pagination;
