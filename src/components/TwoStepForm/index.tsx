import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import Personal from "@components/Personal";
import Contact from "@components/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@redux/store";
import { firstName, lastName, personalStatus } from "@redux/actions";
import mainPageData from "@redux/slices/mainPageData";
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
    const persistedData = useAppSelector(
        (state: any) => state.PersonalFormData,
    );
    const [step, setStep] = useState(1);
    const [activeStep, setActiveStep] = useState(true);
    const statusData = useAppSelector((state: any) => state.mainPageData);
    useEffect(() => {
        if (persistedData?.firstName && persistedData?.lastName) {
            setActiveStep(false);
        } else {
            setActiveStep(true);
        }
    }, [persistedData?.firstName, persistedData?.lastName]);
    return (
        <>
            <Box component="h2" textAlign="center">
                {step === 1 ? "👣 Initial Step" : "🎯 Final Step"}
            </Box>
            {getSteps(step)}

            <Box display="flex" justifyContent="center">
                {step === 1 ? (
                    <></>
                ) : (
                    <Button onClick={() => setStep(() => step - 1)}>
                        Previous
                    </Button>
                )}
                {step === 2 ? (
                    <></>
                ) : (
                    (console.log("status: ", statusData),
                    (
                        <Button
                            disabled={activeStep}
                            onClick={() => setStep(() => step + 1)}
                        >
                            Next
                        </Button>
                    ))
                )}
            </Box>
        </>
    );
};

export { TwoStepFrom };
