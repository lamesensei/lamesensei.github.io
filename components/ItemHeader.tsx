type ItemHeaderProps = {
  header: string;
  subHeader: string;
  dateTime?: string;
};

export const ItemHeader = ({
  header,
  subHeader,
  dateTime,
}: ItemHeaderProps): JSX.Element => (
  <div className="">
    <div className="flex justify-between">
      <h4 className="font-medium text-md">{header}</h4>
      <p className="text-sm text-gray-500">{dateTime}</p>
    </div>
    <h5 className="text-sm text-gray-600">{subHeader}</h5>
  </div>
);
