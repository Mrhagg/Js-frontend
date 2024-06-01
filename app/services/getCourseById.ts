'use server'

export default async function getCourseById(courseId: string) {

    const query = `
    query{
        getCourseById(id: "${courseId}") {
          articles
          authors {
            imageUrl
            name
            text
          }
          categories
          description
          descriptionList
          downloadeableResources
          hours
          id
          imageUri
          imageHeaderUri
          isBestSeller
          likes
          isDigital
          likesInProcent
          prices {
            currency
            discountPrice
            price
          }
          programDetails {
            text
            title
          }
          reviews
          starRating
          text
          title
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
        })
    });

    console.log(query);
    console.log(courseId);
    console.log('Response status:', res.status);
    console.log('Response status text:', res.statusText);

    if (!res.ok) {
      throw new Error(`Failed to fetch course: ${res.statusText}`);
    }

    const result = await res.json();
    return result.data.getCourseById;

  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
}