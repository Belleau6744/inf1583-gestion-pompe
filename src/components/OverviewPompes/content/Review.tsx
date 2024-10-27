type Props = {
    amountDispensed: number;
    volumeDispensed: number;
}

const Review = ({ volumeDispensed, amountDispensed }: Props) => {
    return (
        <div>
            {volumeDispensed}
            {amountDispensed}
        </div>
    )
}

export default Review;