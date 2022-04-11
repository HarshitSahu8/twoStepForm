import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "@redux/store";
import { firstName, lastName } from "@redux/actions";

const Personal = () => {
    const dispatch = useDispatch();
    const persistedData = useAppSelector(
        (state: any) => state.PersonalFormData,
    );
    const { handleSubmit, control, register, formState, watch, setValue } =
        useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    const fillPersistedFormData = () => {
        setValue("firstName", persistedData?.firstName);
        setValue("lastName", persistedData?.lastName);
    };
    useEffect(() => {
        fillPersistedFormData();
    }, []);
    const watchItems = watch();
    useEffect(() => {
        if (Object.keys(watchItems).length > 0) {
            dispatch(firstName(watchItems?.firstName));
        }
        if (Object.keys(watchItems).length > 0) {
            dispatch(lastName(watchItems?.lastName));
        }
    }, [watchItems]);

    return (
        <>
            <Box display="flex" justifyContent="center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Form Validation With Persistance Of Data</h1>
                    <Box display="flex" flexDirection="column">
                        <Controller
                            control={control}
                            name="firstName"
                            render={({ field }) => (
                                <TextField
                                    id="first-name"
                                    label="First Name"
                                    variant="outlined"
                                    placeholder="Enter Your First Name"
                                    fullWidth
                                    margin="normal"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="lastName"
                            render={({ field }) => (
                                <TextField
                                    id="last-name"
                                    label="Last Name"
                                    variant="outlined"
                                    placeholder="Enter Your Last Name"
                                    fullWidth
                                    margin="normal"
                                    {...field}
                                />
                            )}
                        />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Button type="submit">Submit </Button>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default Personal;
