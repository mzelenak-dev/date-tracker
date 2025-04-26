export interface SelectedDate {
  id: number;
  date: Date;
  title: string;
}

export interface DatePickerProps {
  setDateHandler: Dispatch<SetStateAction<SelectedDate>>;
}

export interface DateVisualizerProps {
  selected: SelectedDate;
}