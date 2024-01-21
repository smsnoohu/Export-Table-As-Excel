import { useCallback } from "react";

import { DATA_TYPE } from "Mainpanel/constants";
import { OPTIONS } from "Mainpanel/metaData";

export const Renderer = ({ data, onChange, value, id }) => {
  const renderComponent = useCallback(() => {
    switch (data.dataType) {
      case DATA_TYPE.TEXTBOX:
        return (
          <input
            type="text"
            value={value}
            className="form-control"
            onChange={onChange}
            name={data.labelId}
            id={id}
          />
        );
      case DATA_TYPE.SELECT:
        return (
          <select
            className="form-control"
            onChange={onChange}
            value={value}
            name={data.labelId}
            id={id}
          >
            <option>--Select--</option>
            {OPTIONS[data.labelId]?.map((option) => (
              <option value={option.value} key={option.id}>
                {option.value}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  }, [data, onChange, value, id]);

  return <>{renderComponent()}</>;
};
