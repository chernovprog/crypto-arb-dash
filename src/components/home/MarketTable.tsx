import { useEffect, useState } from 'react';

import {
  Box,
  Grid,
  Link,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import type { Coin } from "@/types";

const PriceChange = ({ value }: { value: number }) => {
  const isPositive = value >= 0;

  return (
    <Typography
      sx={{
        color: isPositive ? 'up.main' : 'down.main',
        fontWeight: 500
      }}
    >
      {isPositive ? `+${value}%` : `${value}%`}
    </Typography>
  )
};

const MarketTable = () => {
  const [tabValue, setTabValue] = useState(0);
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData: Coin[] = [
        { symbol: 'BTC', name: 'Bitcoin', price: 52140.50, change24h: 1.25 },
        { symbol: 'ETH', name: 'Ethereum', price: 2815.20, change24h: -0.45 },
        { symbol: 'BNB', name: 'BNB', price: 355.10, change24h: 2.10 },
        { symbol: 'SOL', name: 'Solana', price: 108.45, change24h: 5.67 },
        { symbol: 'ADA', name: 'Cardano', price: 0.58, change24h: -1.12 },
      ];
      setCoins(mockData);
    };
    fetchData();
  }, [tabValue]);

  return (
    <Stack sx={{ flex: '0 0 45%', minWidth: 0 }}>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            bgcolor: 'background.paper',
          },
          p: 3,
          borderRadius: 2,
        })}
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid
            size={{ xs: 12, md: 8 }}
            order={{ xs: 1, md: 1 }}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                justifyContent: 'center',
              },
            })}
          >
            <Tabs
              value={tabValue}
              onChange={(_, v) => setTabValue(v)}
            >
              <Tab label="Popular" />
              <Tab label="New Listing" />
            </Tabs>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4 }}
            order={{ xs: 3, md: 2 }}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Link
              component={RouterLink}
              to="/markets"
              sx={{
                fontSize: '14px',
                color: 'text.disabled',
                flexShrink: 0,
              }}
            >
              View All 350+ coins
            </Link>
          </Grid>

          <Grid
            size={{ xs: 12, md: 12 }}
            order={{ xs: 2, md: 3 }}
          >
            <TableContainer>
              <Table size="small">
                <TableBody>
                  {coins.map((coin) => (
                    <TableRow
                      key={coin.symbol}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body1" color="text.primary"
                                      sx={{ fontWeight: 600 }}>{coin.symbol}</Typography>
                          <Typography variant="caption" color="text.secondary">{coin.name}</Typography>
                        </Box>
                      </TableCell>

                      <TableCell align="right">
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          ${coin.price.toLocaleString()}
                        </Typography>
                      </TableCell>

                      <TableCell align="right" sx={{ pr: 0 }}>
                        <PriceChange value={coin.change24h} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default MarketTable;
