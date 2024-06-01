export default async function getAllCourses(Courses: (data: any[]) => void){
    const query = `
    query {
      getCourses {
        id
        imageUri
        title
        authors {
          name
        }
        prices {
          discountPrice
          price
        }
        hours
        likes
        likesInProcent
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
          query: query
        })
      });
  
      console.log(res);
    
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
    
      const data = await res.json();
      Courses(data.data.getCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };