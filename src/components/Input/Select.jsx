import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Select = ({ handleNavigation, options, currentWeek }) => {
  const currentWeekNumber = parseInt(currentWeek.replace("Week ", ""));
  const [selectedValue, setSelectedValue] = useState(currentWeekNumber);

  useEffect(() => {
    setSelectedValue(currentWeekNumber);
  }, [currentWeek, currentWeekNumber]);

  const handleChange = (event) => {
    const selectedWeek = "Week " + event.target.value;
    handleNavigation(selectedWeek);
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <>
      <select
        className="text-[#F8EBFD] bg-[#CD3F97] px-4 py-2 mx-2 rounded-lg"
        onChange={handleChange}
        value={selectedValue}
      >
        {options.map((week, index) => {
          return (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          );
        })}
      </select>
    </>
  );
};

Select.propTypes = {
  handleNavigation: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  currentWeek: PropTypes.string.isRequired,
};

export default Select;
