import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
} from "@mui/material";

function SelectForm(props) {
  const { label, id, handleTextFieldChange, products, productId } = props;

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        required
        fullWidth
        sx={{ m: "auto" }}
        label={label}
        labelId={label}
        id={id}
        value={productId}
        onChange={(e) => {
          console.log(e.target.label);
          return handleTextFieldChange({
            target: {
              id,
              value: e.target.value,
            },
          });
        }}
      >
        <MenuItem disabled value="" name="None">
          <em>None</em>
        </MenuItem>
        {products.length
          ? products.map((ele, idx) => (
              <MenuItem value={ele.id} name={ele.name} key={idx}>
                <em>{ele.name}</em>
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
}

export default SelectForm;
