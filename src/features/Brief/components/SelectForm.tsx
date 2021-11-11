import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import PropTypes from "prop-types";

function SelectForm(props: any) {
  const { label, id, handleTextFieldChange, products, productId } = props;

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Select
        labelId={label}
        id={id}
        label={label}
        value={productId}
        displayEmpty
        required
        fullWidth
        sx={{ m: "auto" }}
        onChange={(e: SelectChangeEvent) => {
          return handleTextFieldChange({
            target: {
              id,
              value: e.target.value as string,
            },
          });
        }}
      >
        <MenuItem disabled value={0}>
          <em>None</em>
        </MenuItem>

        {products.length
          ? products.map((ele: Product) => (
              <MenuItem value={ele.id} key={ele.id}>
                <em>{ele.name}</em>
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}
SelectForm.propTypes = {
  id: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  productId: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  handleTextFieldChange: PropTypes.func.isRequired,
};

export default SelectForm;
