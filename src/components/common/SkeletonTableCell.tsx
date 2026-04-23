import { Skeleton, type SkeletonProps } from "@mui/material";

type SkeletonTableCellProps = Pick<SkeletonProps, 'width' | 'height' | 'sx'>;

const SkeletonTableCell = ({
  width = '100%',
  height = '1.2em',
  sx
}: SkeletonTableCellProps) => {
  return (
    <Skeleton
      variant="rounded"
      width={width}
      height={height}
      sx={{
        display: 'inline-block',
        mx: 'auto',
        ...sx,
      }}
    />
  );
}

export default SkeletonTableCell;
