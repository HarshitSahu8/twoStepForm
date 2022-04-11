import React, { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Controller } from "react-hook-form";
import Input from "@components/Input";
import btn from "../Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/store";
import { alternateNo, email, phoneNo } from "@redux/actions";
const Contact = () => {
    const dispatch = useDispatch();
    const persistedData = useAppSelector((state: any) => state.ContactFormData);
    const { handleSubmit, control, register, formState, watch, setValue } =
        useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    const fillSavedData = () => {
        setValue("email", persistedData?.email);
        setValue("phoneNo", persistedData?.phoneNo);
        setValue("alternateNo", persistedData?.alternateNo);
    };
    useEffect(() => {
        fillSavedData();
    }, []);

    const watchItems = watch();
    useEffect(() => {
        if (Object.keys(watchItems).length > 0) {
            dispatch(email(watchItems?.email));
            dispatch(phoneNo(watchItems?.phoneNo));
            dispatch(alternateNo(watchItems?.alternateNo));
        }
    }, [watchItems]);

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                // alignItems="center"
                // minHeight="100vh"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Form Validation With Persistance Of Data</h1>
                    <Box display="flex" flexDirection="column">
                        <Controller
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <TextField
                                    id="email"
                                    label="E-mail"
                                    variant="outlined"
                                    placeholder="Enter Your E-mail Address"
                                    fullWidth
                                    margin="normal"
                                    {...field}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="phoneNo"
                            render={({ field }) => (
                                <TextField
                                    id="phone-number"
                                    label="Phone Number"
                                    variant="outlined"
                                    placeholder="Enter Your Phone Number"
                                    fullWidth
                                    margin="normal"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="alternateNo"
                            render={({ field }) => (
                                <TextField
                                    id="alternate-phone"
                                    label="Alternate Phone"
                                    variant="outlined"
                                    placeholder="Enter Your Alternate Phone"
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

export default Contact;
