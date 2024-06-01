'use client'

import { useState, useEffect } from "react";

import CourseDescription from "../components/singleCourse/courseDescription/CourseDescription";
import CourseDetails from "../components/singleCourse/courseDetails/CourseDetails";
import CourseHeader from "../components/singleCourse/courseHeader/CourseHeader";
import CourseIncludes from "../components/singleCourse/courseIncludes/CourseIncludes";
import getCourseById from "../services/getCourseById";
import CourseAuthor from "../components/singleCourse/courseAuthors/CourseAuthors";
import "./singleCourses.css";

export default function SingleCourse({ params }: {
    params: { id: string}
}) {
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(params.id)

  useEffect(() => {
    const fetchCourse = async () => {
        try {
            const courseData = await getCourseById(params.id);
            setCourse(courseData);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchCourse();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return ( 
    <main>
        <section className="single-course">
            <CourseHeader imageHeaderUri={course.imageUrl} title={course.title} text={course.text} reviews={course.reviews} likes={course.likes} hours={course.hours} author={course.authors.map((author: any) => author.name)} authorImage={course.authors.map((author: any) => author.imageUrl)}/>
            <div className="container">
            <div className="wrapper">
                <div className="container-left">
                    <CourseDescription description={course.description} listItem={course.descriptionList} />
                    <CourseDetails programItems={course.programDetails} />
                </div>
                <div className="container-right">
                    <CourseIncludes hours={course.hours} articles={course.articles} downloadResources={course.downloadeableResources} price={course.prices.price} />
                </div>
            </div>
            <CourseAuthor imageUri={course.authors.map((author: any) => author.imageUrl)} name={course.authors.map((author: any) => author.name)} text={course.authors.map((author: any) => author.text)} />
            </div>
        </section>
    </main>
    );
  }