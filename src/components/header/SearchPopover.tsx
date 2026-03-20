import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Avatar,
  Box,
  CircularProgress,
  InputAdornment,
  ListItemAvatar,
  ListItemText,
  Popover,
  TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useCryptoSearch } from "@/components/header/hooks/useCryptoSearch";

interface SearchPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const SearchPopover = ({ anchorEl, onClose }: SearchPopoverProps) => {
  const { inputValue, setInputValue, options, loading } = useCryptoSearch();
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Box sx={{ p: 2, width: { xs: 280, sm: 320 } }}>
        <Autocomplete
          freeSolo
          loading={loading}
          options={options}
          inputValue={inputValue}
          onInputChange={(_, value) => setInputValue(value || "")}
          onChange={(_, value) => {
            if (value && typeof value !== "string" && 'id' in value) {
              navigate(`/coin/${value.id}`);
              onClose();
            }
          }}
          noOptionsText="No results"
          sx={{
            "& .MuiAutocomplete-endAdornment .MuiIconButton-root": {
              "& svg": { fontSize: "1rem" },
            },
          }}
          getOptionLabel={(option) => (typeof option === "string" ? option : option.label)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="ETH"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start" sx={{ mr: 0 }}>
                      <SearchIcon sx={{ fontSize: 25, ml: 0.5 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <>
                      {loading && <CircularProgress size={14} />}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                },
              }}
            />
          )}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;

            if (typeof option === 'string') {
              return (
                <li key={key} {...optionProps}>{option}</li>
              );
            }

            return (
              <li key={option.id} {...optionProps}>
                <ListItemAvatar>
                  <Avatar src={option.thumb} alt={option.label} sx={{ width: 24, height: 24 }} />
                </ListItemAvatar>
                <ListItemText primary={option.label} />
              </li>
            );
          }}
        />
      </Box>
    </Popover>
  );
};

export default SearchPopover;
