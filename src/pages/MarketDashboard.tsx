import { useEffect } from "react";

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { FullPageLoader } from "@/components/common/FullPageLoader";
import { columns } from "@/constants/marketTable.config";
import { useMarketDataStore } from "@/store/useMarketDataStore";

const MarketDashboard = () => {
  const { marketData, isLoading, startPolling } = useMarketDataStore();

  useEffect(() => {
    const stopPolling = startPolling(60000);

    return () => stopPolling();
  }, [startPolling]);


  if (isLoading) return <FullPageLoader />

  return (
    <Box sx={{ px: 2 }}>
      <TableContainer>
        <Table
          sx={{
            '& .MuiTableRow-root': {
              borderBottom: (theme) => `1px solid ${theme.vars.palette.tableBorder.main}`
            }
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 50, }}>#</TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  width={column.minWidth}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {marketData?.data.map((market, index) => (
              <TableRow key={market.name}>
                <TableCell sx={{ width: 50, }}>{index + 1}</TableCell>

                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{
                      minWidth: column.minWidth,
                      fontWeight: 500,
                    }}
                  >
                    {column.format
                      ? column.format(market[column.id])
                      : market[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MarketDashboard;
