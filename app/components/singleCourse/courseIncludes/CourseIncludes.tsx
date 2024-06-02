import Button from "../../global/formgroup/button/Button";

type CourseIncludesProps = {
    hours: number;
    articles: number;
    downloadResources: number;
    price: number;
    discountPrice?: number;
}

export default function CourseIncludes({
    hours,
    articles,
    downloadResources,
    price,
    discountPrice
}: CourseIncludesProps) {
    return (
        <div>
            <h4>This course includes:</h4>
            <ul>
                <li>{hours} hours on-demand video</li>
                <li>{articles} articles</li>
                <li>{downloadResources} downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Certificate of completion</li>
            </ul>
            <h2>{price}</h2>
            <Button className="btn-theme" title="Join Course" />
        </div>
    )
}