import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import Personal from "@components/Personal";
import Contact from "@components/Contact";

const getSteps = (step: number) => {
    switch (step) {
        case 1:
            return <Personal />;
        case 2:
            return <Contact />;
        default:
            return <>Empty Page</>;
    }
};

const TwoStepFrom = () => {
    const [step, setStep] = useState(1);
    return (
        <>
            <Box component="h2" textAlign="center">
                Step {step}
            </Box>
            {getSteps(step)}

            <Box display="flex" justifyContent="center">
                <Button onClick={() => setStep(() => step - 1)}>
                    Previous
                </Button>
                <Button onClick={() => setStep(() => step + 1)}>Next</Button>
            </Box>
        </>
    );
};

export { TwoStepFrom };
