import { Features } from "@features";
import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomTabPanel from "./CustomTabPanel";
import TransactionsImpayees from "./TransactionImpayees";
import TransactionsGeneral from "./TransactionsGeneral";
import Archive from "./Archive";

const Container = styled.div`
`;

const Rapport = () => {
    const [ currentPage, setCurrentPage ] = useState<number>(0);
    const isUserConected = useSelector(Features.UserFeature.selector.isUserSignedIn);
    const nav = useNavigate();

    useEffect(() => {
        if (!isUserConected) {
          nav("/");
        }
      }, [isUserConected, nav]);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setCurrentPage(newValue);
    };

    return (
        <Container>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "white", marginTop: "68px" }}>
                <Tabs value={currentPage} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Tout" />
                    <Tab label="Transactions Impayées" />
                    <Tab label="Archive" />
                </Tabs>
            </Box>
                <CustomTabPanel value={currentPage} index={0}>
                    <TransactionsGeneral/>
                </CustomTabPanel>
                <CustomTabPanel value={currentPage} index={1}>
                    
                    <TransactionsImpayees />
                </CustomTabPanel>
                <CustomTabPanel value={currentPage} index={2}>
                     <Archive />
                </CustomTabPanel>
        </Container>
  );
}

export default Rapport;