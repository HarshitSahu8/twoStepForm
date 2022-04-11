import { Button } from "@mui/material";

type Btntype = {
    label?: string;
};

const Btn = ({ label }: Btntype) => {
    return (
        <>
            <Button
                sx={{
                    margin: "2%",
                }}
                variant="contained"
                type="submit"
            >
                {label}
            </Button>
        </>
    );
};

export default Btn;
