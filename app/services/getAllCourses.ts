export default async function getAllCourses(){
    const query = `
    query {
      getAllCourses {
        id 
        isBestSeller 
        title 
        authors {
          name
        } 
        categories 
        prices {
          price 
          discount
        } 
        hours 
        likesInProcent 
        likes 
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

      const data = await res.json();
      return data.data.getAllCourses as  Course[];
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  };



export interface Course {
    id: string;
    imageUri: string | null;
    imageHeaderUri: string | null;
    isBestSeller: boolean;
    isDigital: boolean;
    categories: string[] | null;
    title: string | null;
    ingress: string | null;
    starRating: number;
    reviews: string | null;
    likesInProcent: string | null;
    likes: string | null;
    hours: string | null;
    authors: Author[] | null;
    prices: Prices | null;
    content: Content | null;
}

export interface Author {
    name: string | null;
}

export interface Content {
    description: string | null;
    includes: string[] | null;
    programDetails: ProgramDetailItem[] | null;
}

export interface Prices {
    currency: string | null;
    price: number;
    discount: number;
}

export interface ProgramDetailItem {
    id: number;
    title: string | null;
    description: string | null;
}
