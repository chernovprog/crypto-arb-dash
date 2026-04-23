import { useMemo } from "react";

import { format } from "date-fns";

interface CellTimeProps {
  timestamp: number;
}

const CellTime = ({ timestamp }: CellTimeProps) => {

  const formattedTime = useMemo(() =>
      format(new Date(timestamp), 'HH:mm:ss'),
    [timestamp]);

  return <>Updated: {formattedTime}</>;
};

export default CellTime;
