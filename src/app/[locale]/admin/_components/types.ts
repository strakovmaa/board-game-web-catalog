export type CsvColumnOption<AllowEnabled extends boolean = true> = AllowEnabled extends true
  ? {
      enabled: boolean;
      colName: string;
    }
  : {
      colName: string;
    };

type CsvColumnTypeOption = CsvColumnOption & {
  typeGame: string;
};

export type CsvColumnsOptions = {
  type: CsvColumnTypeOption;
  name: CsvColumnOption<false>;
  id: CsvColumnOption;
  langs: CsvColumnOption;
};
