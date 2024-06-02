'use client'
import Link from "next/link";
import Image from "next/image";

import getAllCourses, { Course } from "../services/getAllCourses";
import CourseItem from "../components/courses/CourseItem";
import { useState, useEffect } from "react";
import "./Course.css";
import CourseImage from "../../public/images/woman.svg";


export default function Courses() {
    const [courses, setCourses] = useState<Course[]>();

    useEffect(() => {
        const fetchCourses = async() => {
            const allCourses = await getAllCourses();
            console.log("allCourses", allCourses);
            setCourses(allCourses);
        }
        fetchCourses();
    }, []);

    return (
      <main>
        <section className="all-courses">
            <div className="container">
                <div>
                    <div>
                        <Link href="#">Home</Link><i className="fa-light fa-angles-right"></i><Link href="#">Courses</Link>
                    </div>
                    <div className="title-holder">
                        <h1>Courses</h1>
                        <div className="input-wrapper">
                            <div className="input-holder"><input type="text" /><span></span><button><i className="fa-light fa-angle-down"></i></button></div>
                            <div className="input-holder"><input type="search" /><button><i className="fa-light fa-magnifying-glass"></i></button></div>
                        </div>
                    </div>
                    <div className="grid-container">
                        {courses?.map((course) => {
                        return (<CourseItem title={course.title!} author={course.authors![0].name!} price={course.prices!.price} hours={parseInt(course.hours!)} likePercentage={course.likesInProcent!} likeCount={course.likes!} id={course.id} />)
                        })}
                    </div>
                    <div className="bottom-content">
                        <p>Ready to get started?</p>
                        <h1>Take Your <span>Skills</span> to the Next Level</h1>
                        <button className="btn-theme">Work with us</button>
                        <Image src={CourseImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
      </main>
    );
  }