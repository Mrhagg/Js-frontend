import "./courseHeader.css";

type CourseHeaderProps = {
    imageHeaderUri: string;
    imageUri: string;
    title: string;
    text: string;
    reviews: number;
    likes: number;
    hours: number;
    author: string;

}

export default function CourseHeader({
    imageHeaderUri,
    imageUri,
    title,
    text,
    reviews,
    likes,
    hours,
    author,
}: CourseHeaderProps) {
    return (
        <div className="course-header" style={{ backgroundImage: `url(${imageHeaderUri})` }}>
            <div className="container">
                <div className="text-holder">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
                <div className="meta-info">
                    <p>{reviews/1000}K reviews</p>
                    <p>{likes/1000}K likes</p>
                    <p>{hours} Hours</p>
                </div>
                <div className="author-holder">
                    <div>
                        <img className="author-img" src={imageUri} />
                    </div>
                    <div>
                        <p>Created by</p>
                        <p>{author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}