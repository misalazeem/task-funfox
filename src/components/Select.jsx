import React from "react";

const Select = ({ handleNavigation, options }) => {
  const handleChange = (event) => {
    const selectedWeek = event.target.value;
    console.log("SelectedWeek = ", selectedWeek);
    handleNavigation(selectedWeek);
  };

  return (
    <>
      <select className="text-[#F8EBFD] bg-[#CD3F97] px-4 py-2 mx-2 rounded-lg" onChange={handleChange}>
      {options.map((week, index) => {
          console.log(week);
          return (
            <option key={index} value={week}>{index+1}</option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
