import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({children}) => {

    return(
        <div>
            <StarRatings rating={(children/2)}
                         numberOfStars={5}
                         starRatedColor={'gold'}
                         starEmptyColor={'white'}
                         starDimension={'22px'}
                         starSpacing={'2px'}/>
        </div>
    )

}

export {StarsRating};