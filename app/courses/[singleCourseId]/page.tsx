'use client'

import { useState, useEffect } from "react";

import CourseDescription from "../../components/singleCourse/courseDescription/CourseDescription";
import CourseDetails from "../../components/singleCourse/courseDetails/CourseDetails";
import CourseHeader from "../../components/singleCourse/courseHeader/CourseHeader";
import CourseIncludes from "../../components/singleCourse/courseIncludes/CourseIncludes";
import getCourseById from "../../services/getCourseById";
import CourseAuthor from "../../components/singleCourse/courseAuthors/CourseAuthors";
import "./singleCourses.css";
import { useParams } from "next/navigation";
import { Course } from "@/app/services/getAllCourses";

export default function Page({ params }: { params: { singleCourseId: string } }) {
  const [course, setCourse] = useState<Course | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { singleCourseId } = params;

  useEffect(() => {
    const fetchCourse = async () => {
        try {
            const courseData = await getCourseById(singleCourseId);
            setCourse(courseData);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        };
        fetchCourse();
    }, [singleCourseId]);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    if(!course) return;
    return ( 
    <main>
        <section className="single-course">
            <CourseHeader imageHeaderUri={""} title={course.title ?? ''} text={course.ingress ?? ''} reviews={course.reviews ? +course.reviews : 0} likes={course.likes ? +course.likes : 0} hours={course.hours ? +course.hours : 0} author={''} authorImage={''}/>
            <div className="container">
            <div className="wrapper">
                <div className="container-left">
                    <CourseDescription description={course.ingress ?? ''} listItem={[]} />
                    <CourseDetails programItems={course.content?.programDetails!} />
                </div>
                <div className="container-right">
                    <CourseIncludes hours={course.hours ? +course.hours : 0} articles={0} downloadResources={0} price={0} />
                </div>
            </div>
            {/* <CourseAuthor imageUri={course.authors!.map((author: any) => author.imageUri)} name={course.authors.map((author: any) => author.name)} text={course.authors.map((author: any) => author.text)} /> */}
            </div>
        </section>
    </main>
    );
  }