import { useEffect, useState } from 'react';

import {
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

import ExchangeSubscriber from "@/components/arbitrage/ExchangeSubscriber";
import MaxSpread from "@/components/arbitrage/MaxSpread";
import PriceCell from "@/components/arbitrage/PriceCell";
import { priceBuffer } from "@/components/arbitrage/store/priceBuffer";
import { spreadCalculator } from "@/services/SpreadCalculator";
import stompClient from "@/services/stompClient";
import { useAppMetadataStore } from "@/store/useAppMetadataStore";

const ArbitrageBoardPage = () => {
  const [isConnected, setIsConnected] = useState(stompClient.connected)

  const {
    exchangeSubscriptions,
    currencySubscriptions,
    tradingPairSubscriptions
  } = useAppMetadataStore();

  useEffect(() => {
    const handleConnect = () => setIsConnected(true);
    const handleDisconnect = () => setIsConnected(false);

    stompClient.onConnect = handleConnect;
    stompClient.onDisconnect = handleDisconnect;

    if (!stompClient.active) {
      stompClient.activate();
    }

    return () => {
      stompClient.deactivate();
    };
  }, []);

  useEffect(() => {
    priceBuffer.start();
    spreadCalculator.start();
    return () => {
      priceBuffer.stop();
      spreadCalculator.stop();
    }
  }, []);

  return (
    <Container maxWidth="lg" sx={{ my: { xs: 2, sm: 4, md: 6 } }}>
      <TableContainer>
        <Table
          sx={{
            borderCollapse: 'separate',
            minWidth: 600,
            width: 'auto',
            mx: 'auto',
            '& .MuiTableCell-root': {
              borderBottom: (theme) => `0.1px solid ${theme.vars.palette.tableBorder.main}`,
              borderRadius: '0 !important',
            },
          }}
        >
          <TableHead
            sx={{
              '& .MuiTableCell-root': {
                fontWeight: 'bold'
              }
            }}
          >
            <TableRow>
              <TableCell sx={{ width: 40 }}>#</TableCell>
              <TableCell sx={{ width: 180 }}>Asset</TableCell>

              {exchangeSubscriptions.map((sub) => (
                <TableCell
                  key={sub.exchangeName}
                  sx={{ width: 150 }}
                  align="right"
                >
                  {sub.exchangeName}

                  <ExchangeSubscriber
                    stompClient={stompClient}
                    topic={sub.topicDestination}
                    exchangeName={sub.exchangeName}
                    isConnected={isConnected}
                  />
                </TableCell>
              ))}

              <TableCell
                align="right"
                sx={{ minWidth: 150 }}
              >
                Max Spread %
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tradingPairSubscriptions?.baseCurrencies?.map((baseCurrencyId, index) => (
              <TableRow key={baseCurrencyId}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Stack direction="row">
                    <Typography
                      component="p"
                      fontWeight="bold"
                    >
                      {currencySubscriptions[baseCurrencyId]?.name}
                    </Typography>

                    <Typography
                      color="textSecondary"
                      component="p"
                      sx={{ ml: 1 }}
                    >
                      {currencySubscriptions[baseCurrencyId]?.ticker}
                    </Typography>
                  </Stack>
                </TableCell>

                {exchangeSubscriptions.map((exchSub) => (
                  <TableCell
                    key={exchSub.exchangeName}
                    align="right"
                    sx={{ width: 150 }}
                  >
                    <PriceCell
                      exchange={exchSub.exchangeName}
                      baseCurrencyId={baseCurrencyId}
                    />
                  </TableCell>
                ))}

                <TableCell align="right">
                  <MaxSpread
                    baseCurrencyId={baseCurrencyId}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ArbitrageBoardPage;
