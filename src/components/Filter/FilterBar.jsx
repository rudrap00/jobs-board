import React from "react";
import styles from "./FilterBar.module.scss";
import InputControl from "./InputControl";
import SelectControl from "./SelectControl";
import filters from "./constants";

const FilterBar = () => {
  return (
    <div className={styles.container}>
      {filters.map((item) => {
        if (item.type === "select")
          return <SelectControl key={item.id} data={item} />;
        return <InputControl key={item.id} data={item} />;
      })}
    </div>
  );
};

export default FilterBar;
