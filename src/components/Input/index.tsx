import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import Box from "@mui/material/Box";

type FormValues = {
    name: string;
    type?: string;
    rules?: any;
    control?: any;
    label?: any;
    autoFocus?: boolean;
};

const Input = ({
    name,
    control,
    label,
    type,
    rules,
    autoFocus,
    ...rest
}: FormValues) => {
    return (
        <Box>
            <Controller
                control={control}
                defaultValue=""
                name={name}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <TextField
                        sx={{
                            margin: "2%",
                            width: "100%",
                        }}
                        label={label}
                        variant="standard"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error?.message}
                        autoFocus={autoFocus}
                    />
                )}
                rules={rules}
            />
        </Box>
    );
};
export default Input;
