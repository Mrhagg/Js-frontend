export default function CourseItems() {
    return (
    <div className="course-items">
            
        <a className="course" asp-action="Details" asp-controller="Courses" asp-route-id="@course.Id">

          <div className="bestseller">Best Seller</div>
          
            <button className="btn btn-circle bookmark"><i className="fa-regular fa-bookmark"></i></button>
            <img src="~/images/courses/@course.Image" alt="@course.Title" />
            <div className="content">
                <h5 className="title">@course.Title</h5>
                <p className="auhor">By @course.Author</p>
                <div className="pricing">
                    
                     <div className="discount">@course.DiscountPrice</div>
                    
                    <div className="price">@course.Price</div>
                </div>
                <div className="footer">
                    <div className="hours">
                        <i className="fa-regular fa-clock"></i> @course.Hours hours
                    </div>
                    <div className="Likes">
                        <i className="fa-regular fa-thumbs-up"></i> @course.LikesInProcess (@course.LikesInNumbers)
                    </div>
                </div>
            </div>
        </a>
    </div>
    );
  }
  