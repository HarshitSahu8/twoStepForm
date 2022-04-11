import React from "react";
import { TwoStepFrom } from "@components/TwoStepForm";
const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <TwoStepFrom />
        </div>
    );
};

export default Home;
