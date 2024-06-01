import "./courseAuthors.css"; 

type CourseAuthorProps = {
    imageUri: string;
    name: string;
    text: string;
}

export default function CourseAuthors({
    imageUri,
    name,
    text
}: CourseAuthorProps) {
    return (
      <div className="course-author">
        <img className="author-img" src={imageUri} alt="" />
        <div className="author-content">
            <p>Learn from the best</p>
            <h4>{name}</h4>
            <p>{text}</p>
        </div>
      </div>
    )
}