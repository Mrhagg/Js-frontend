'use server'

import { Course } from "./getAllCourses";

export default async function getCourseById(courseId: string) {

    const query = `
    query getCoursesById($courseId: String!) {
      getCoursesById(id: $courseId) {
        id
        isBestSeller   
        isDigital   
        categories   
        title   
        ingress   
        starRating   
        reviews   
        likesInProcent   
        likes   
        hours   
        authors { 
          name 
        }   
        prices { 
          currency 
          discount 
          price 
        }   
        content { 
          description 
          includes 
          programDetails { 
            id 
            title 
            description 
          }
        }   
        imageUri   
        imageHeaderUri 
      } 
    }
      `;
    try {
    const res = await fetch('http://localhost:7029/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: {
              courseId: courseId
            }
        })
    });

    const result = await res.json();
    console.log("result", result);
    return result.data.getCoursesById as Course;

  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
}