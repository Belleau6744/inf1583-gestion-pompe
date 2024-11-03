import { Features } from "@features";
import PropaneIcon from '@mui/icons-material/Propane';
import { BasePropsType } from "@types";
import { useSelector } from 'react-redux';
import styled from "styled-components";

type ReservoirProps = BasePropsType & {
    id: string;
    color: string;
}

const Container = styled.div.attrs<{$fillPercentage: number, $color: string}>(props => ({
    style: {
        background: `linear-gradient(
            to top,
            ${props.$color} ${props.$fillPercentage}%,
            #484848 ${props.$fillPercentage}%
        )`
    }
}))`
    width: 100px;
    height: 100px;
    position: absolute;
    border: 2px solid black; 
`;

const ContentWrapper = styled.div`
    height: 100%;
`;

const ValueWrapper = styled.span`
    background: #eeeeee;
    color: black;
    opacity: 90%;
`;

const Reservoir = (props: ReservoirProps) => {
    const { className, color, id } = props;
    const fillPercentage = useSelector(Features.GestionPompesFeature.selector.getReservoirFillPercentage(id));

    return (
        <Container className={className} $fillPercentage={fillPercentage} $color={color}>
            <PropaneIcon fontSize="medium" />
            <ContentWrapper>
                <ValueWrapper>{fillPercentage}%</ValueWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default Reservoir;