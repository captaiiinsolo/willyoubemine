import React, { useContext } from "react";
import YesAndNoContext from "./YesAndNoContext";
import { Stack, Button } from "@mui/material";

export default function YesAndNo() {

    const { yesText, onYesClick } = useContext(YesAndNoContext);

    return (
        <Stack spacing={2} direction="row" justifyContent='center'>
            <Button onClick={onYesClick} variant="contained" color="primary">
                {yesText}
            </Button>
            <Button variant="outlined" color="secondary">
                No
            </Button>
        </Stack>
    )
}