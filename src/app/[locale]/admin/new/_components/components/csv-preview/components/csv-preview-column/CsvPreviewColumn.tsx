import { CsvColumnsOptions } from '@/csvParser';
import { Game } from '@/types';
import { Typography } from '@mui/material';

type Props = {
  column: string;
  game: Game;
};

export const CsvPreviewColumn = ({ column, game }: Props) => {
  const value = column === 'type' ? game.notes : game[column as keyof Omit<CsvColumnsOptions, 'type' | 'name'>];

  return (
    <>
      {Array.isArray(value)
        ? value.map((item, index) => (
            <Typography key={index} variant="body2" gutterBottom>
              {item}
            </Typography>
          ))
        : value}
    </>
  );
};
