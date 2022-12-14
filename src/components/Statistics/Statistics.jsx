import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <div>
        <StatisticTitle>{title}</StatisticTitle>

        <StatisticsList>
          {stats.map(({ id, icon, total, title }, index) => (
            <StatisticItem
              key={id}
              icon={icons[index]}
              title={title}
              total={total}
            />
          ))}
        </StatisticsList>
      </div>
    </>
  );
};
