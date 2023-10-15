import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { Link } from '@mui/material';
import { useTranslations } from 'next-intl';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

type Props = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
};

export const ShowMoreToggler = ({ expanded, setExpanded }: Props) => {
  const t = useTranslations();

  const handleToggle: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    setExpanded((prev) => !prev);
  };

  return (
    <Link component="button" variant="body2" onClick={handleToggle} display="flex" underline="hover" sx={{ m: 'auto' }}>
      {expanded ? (
        <>
          {t('common.showLess')}
          <KeyboardArrowUp fontSize="small" />
        </>
      ) : (
        <>
          {t('common.showMore')}
          <KeyboardArrowDown fontSize="small" />
        </>
      )}
    </Link>
  );
};
