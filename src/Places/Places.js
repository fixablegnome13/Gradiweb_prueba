import './styles.places.css';

export const Places = () => {
    return (
        <div className="containerPlaces">
            <div>
                <div className="textPlaces">
                    <p><b>Places to</b> visit</p>
                </div>
                <div>
                    <img className="imgPlaces" alt="" src={`https://ca-times.brightspotcdn.com/dims4/default/9bb737e/2147483647/strip/true/crop/6000x4000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F71%2F20%2Fbcddfb109f7067687742fa554137%2F41a5e5ffd7154c3abcea7f2ebd34ed11`} />
                </div>
            </div>
            <div>
                <div className="textReviews">
                    <p style={{ color: 'gray'}}><small>Top reviews</small></p>
                </div>
                <div className="divPlaces">

                    <div className="imgPlaces2"></div>
                    <div className="imgPlaces3"></div>
                </div>
            </div>
        </div>
    )
}