import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@redux/store";
import { firstName, lastName, personalStatus } from "@redux/actions";

interface formData {
    firstName: string;
    lastName: string;
}

const Personal = () => {
    const dispatch = useDispatch();
    const persistedData = useAppSelector(
        (state: any) => state.PersonalFormData,
    );
    const {
        handleSubmit,
        control,
        register,
        formState,
        watch,
        setValue,
        trigger,
    } = useForm<fromData>({
        defaultValues: {},
        criteriaMode: "all",
        mode: "onChange",
    });
    const onSubmit = (data: any) => {
        console.log(data);
    };
    const fillSavedData = () => {
        setValue("firstName", persistedData?.firstName);
        setValue("lastName", persistedData?.lastName);
        if (persistedData?.firstName && persistedData?.lastName) {
            dispatch(personalStatus(true));
        }
    };
    useEffect(() => {
        fillSavedData();
    }, []);
    const watchFields = watch();
    useEffect(() => {
        if (Object.keys(watchFields).length > 0) {
            dispatch(firstName(watchFields?.firstName));
            dispatch(lastName(watchFields?.lastName));
        }
        if (watchFields?.firstName && watchFields?.lastName) {
            dispatch(personalStatus(true));
        }
    }, [watchFields]);

    return (
        <>
            <Box display="flex" justifyContent="center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Form Validation With Persistance Of Data</h1>
                    <Box display="flex" flexDirection="column">
                        <Controller
                            control={control}
                            name="firstName"
                            rules={{
                                required: {
                                    value: true,
                                    message: "First Name is required",
                                },
                            }}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    value={value}
                                    id="first-name"
                                    label="First Name"
                                    variant="outlined"
                                    placeholder="Enter Your First Name"
                                    fullWidth
                                    margin="normal"
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : ""}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="lastName"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Last Name is required",
                                },
                            }}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    value={value}
                                    id="last-name"
                                    label="Last Name"
                                    variant="outlined"
                                    placeholder="Enter Your Last Name"
                                    fullWidth
                                    margin="normal"
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : ""}
                                />
                            )}
                        />
                    </Box>
                    {/* <Box display="flex" justifyContent="center">
                        <Button type="submit">Submit </Button>
                    </Box> */}
                </form>
            </Box>
        </>
    );
};

export default Personal;
