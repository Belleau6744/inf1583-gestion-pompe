import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import styled from "styled-components";
import TransactionsImpayees from "./TransactionImpayees";

const Container = styled.div`
`;

const Rapport = () => {
    const [ currentPage, setCurrentPage ] = useState<number>(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setCurrentPage(newValue);
    };

    return (
        <Container>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "white" }}>
                <Tabs value={currentPage} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
                <CustomTabPanel value={currentPage} index={0}>
                    <TransactionsImpayees />
                </CustomTabPanel>
                <CustomTabPanel value={currentPage} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={currentPage} index={2}>
                    Item Three
                </CustomTabPanel>
        </Container>
  );
}

export default Rapport;