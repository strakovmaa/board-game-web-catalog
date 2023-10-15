import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { useEffect, useMemo, useState, useTransition } from 'react';
import { StatusOverview } from '../status-overview';
import { UnfinishedOverview } from '../unfinished-overview';
import { Log } from '../log';
import { Game, LogRecord, Status } from '@/types';
import { GAME_LIST_SLICE } from '../../config';
import { processGameList } from '../../utils';
import { GameList } from '@/components';
import { saveGameList } from '@/actions';

type Props = {
  gameList: Game[];
};

export const BggLoader = ({ gameList }: Props) => {
  const [_isPending, startTransition] = useTransition();

  const [newGameList, setNewGameList] = useState<Game[]>([]);
  const [log, setLog] = useState<LogRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const processingCount = log.length;
  const processGoalCount = GAME_LIST_SLICE[1] - GAME_LIST_SLICE[0];

  const finishedGameList = useMemo(() => gameList?.filter((game) => game.status === Status.FINISHED), [gameList]);

  const handleLoad = async () => {
    if (!gameList.length) {
      return;
    }

    setNewGameList([]);
    setLog([]);
    setIsLoading(true);

    await processGameList(gameList.slice(...GAME_LIST_SLICE), setNewGameList, setLog);

    setIsLoading(false);
  };

  useEffect(() => {
    const mergedGameList = [...gameList, ...newGameList];

    const handleSaveGameList = async () => {
      startTransition(() => saveGameList(mergedGameList));
    };

    handleSaveGameList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newGameList]);

  return (
    <>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Doplnění dat z BGG
        </Typography>

        <StatusOverview gameList={gameList} />
        <UnfinishedOverview gameList={gameList} />

        <Box sx={{ display: 'inline-block', position: 'relative' }}>
          <Button variant="contained" color="info" onClick={handleLoad} disabled={isLoading}>
            Načíst BGG pro hry {GAME_LIST_SLICE[0]}-{GAME_LIST_SLICE[1]}
          </Button>
          {isLoading && (
            <LinearProgress
              value={(processingCount / processGoalCount) * 100}
              variant="determinate"
              color="success"
              sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          )}
        </Box>
        {isLoading && (
          <Typography color="text.secondary" sx={{ display: 'inline-block', ml: 2 }}>
            {processingCount} / {processGoalCount}
          </Typography>
        )}
      </Box>

      <Log log={log} />

      <GameList gameList={finishedGameList} gameTotalCount={finishedGameList?.length} />
    </>
  );
};
