import { Select, Spin } from "antd";
import { useCallback, useState } from "react";
import debounce from "lodash/debounce";

const DebounceSelect = ({ url, placeholder, onChange }) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserList = async (searchText) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchText}`);
      const data = await response.json();
      setOptions(
        data.map((user) => ({
          label: user.name,
          value: user.name,
          id: user.id,
        }))
      );
    } catch (err) {
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  const debounceFetcher = useCallback(debounce(fetchUserList, 500), []);

  return (
    <Select
      showSearch
      options={options}
      onSearch={debounceFetcher}
      onChange={onChange}
      placeholder={placeholder}
      notFoundContent={loading ? <Spin size="small" /> : "No results found"}
    />
  );
};

export default DebounceSelect;
