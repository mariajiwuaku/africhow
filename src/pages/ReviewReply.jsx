import React, { useState } from 'react';
// import ReviewNav from '../components/Reviews/ReviewNav';
import NewNavbar from '../components/NewNav/NewNavBar';
import Solomon from '../assets/Review-Images/Ellipse 8.png';
import Star from '../assets/Review-Images/Star 3.png';
import Joshua from '../assets/Review-Images/image 2.png';

const ReviewReply = () => {
  const [comment, setComment] = useState('');

  const handleReply = () => {
    // Implement your reply functionality here
    console.log('Reply button clicked!');
    // Add your logic to handle the reply button click
  };

  const handleAddComment = () => {
    // Implement your add comment functionality here
    console.log('Add Comment button clicked!');
    // Add your logic to handle the add comment button click
  };

  const handleDelete = () => {
    // Implement your delete functionality here
    console.log('Delete button clicked!');
    // Add your logic to handle the delete button click
  };

  return (
    <div className='h-screen'>
      <NewNavbar />
      <div className="w-full h-20 relative bg-emerald-400 bg-opacity-10 flex items-center">
        <img className="w-12 h-12 left-0 ml-4 rounded-full" src={Joshua} alt="Joshua" />
        <div className="w-8 h-8 ml-4 md:ml-64 mt-1 absolute" />
        <div className="ml-4 md:ml-16 text-neutral-900 text-lg font-bold font-['Manrope'] tracking-tight">Good afternoon Joshua</div>
        <div className="ml-4 md:ml-16 text-neutral-900 text-base font-bold font-['Manrope'] tracking-tight">You’ve received 20 reviews</div>
      </div>

      {/* User Information */}
      <div className="left-[0] top-[180px] absolute flex-col justify-start items-start gap-4 inline-flex"  style={{ paddingTop: '5px', paddingLeft: '10px' }}>
        {/* User details */}
        <div className="flex-col justify-start items-start gap-3 flex">
          {/* User profile */}
          <div className="flex-col justify-end items-start gap-2 flex">
            {/* Profile image and user details */}
            <div className="flex items-center">
              <img className="w-9 h-9 rounded-full" src={Solomon} alt="user" />
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Inter'] tracking-tight">Solomon Enahke</div>
                <div className="justify-center items-center gap-1 inline-flex">
                  <div className="justify-start items-start flex" />
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    Rating
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">12/10/2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Review content */}
          <div className="w-full md:w-96 lg:w-full">
            <span className="text-neutral-600 text-lg font-normal font-['Manrope'] leading-tight tracking-tight">
              Enjoyed a delightful meal at this restaurant. The ambiance was great, and the service was excellent. I highly recommend it!
            </span>
            <span className="text-emerald-400 text-lg font-semibold font-['Manrope'] leading-tight tracking-tight">See more</span>
          </div>
        </div>
        
        {/* Reply button */}
        <div className="Btn px-4 py-1 bg-emerald-400 justify-center items-center gap-2.5 inline-flex" onClick={handleReply}>
          <div className="Reply text-center text-white text-base font-bold font-['Manrope'] tracking-tight">Reply</div>
        </div>
      </div>
      
      {/* User Information */}
      <div className="left-[0] top-[350px] absolute flex-col justify-start items-start gap-4 inline-flex"  style={{ paddingTop: '5px', paddingLeft: '10px' }}>
        {/* User details */}
        <div className="flex-col justify-start items-start gap-3 flex">
          {/* User profile */}
          <div className="flex-col justify-end items-start gap-2 flex">
            {/* Profile image and user details */}
            <div className="flex items-center">
              <img className="w-9 h-9 rounded-full" src={Solomon} alt="user" />
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Inter'] tracking-tight">Solomon Enahke</div>
                <div className="justify-center items-center gap-1 inline-flex">
                  <div className="justify-start items-start flex" />
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    Rating
                  </div>
                  <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">12/10/2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Review content */}
          <div className="w-full md:w-96 lg:w-full">
            <span className="text-neutral-600 text-lg font-normal font-['Manrope'] leading-tight tracking-tight">
              Enjoyed a delightful meal at this restaurant. The ambiance was great, and the service was excellent. I highly recommend it!
            </span>
            <span className="text-emerald-400 text-lg font-semibold font-['Manrope'] leading-tight tracking-tight">See more</span>
          </div>
        </div>
        {/* Reply button */}
        <div className="Btn px-4 py-1 bg-emerald-400 justify-center items-center gap-2.5 inline-flex" onClick={handleReply}>
          <div className="Reply text-center text-white text-base font-bold font-['Manrope'] tracking-tight">Reply</div>
        </div>
      </div>
        
      {/* User Information */}
      <div className="w-full left-[25px] top-[500px] absolute flex-col justify-start items-start gap-4 inline-flex"  style={{ paddingTop: '5px', paddingLeft: '10px' }}>
        {/* User details */}
        <div className="flex-col justify-start items-start gap-3 flex">
          {/* User profile */}
          <div className="flex-col justify-end items-start gap-2 flex">
            {/* Profile image and user details */}
            <div className="flex items-center">
              <img className="w-9 h-9 rounded-full" src={Joshua} alt="user" />
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Inter'] tracking-tight">Joshua Akindele</div>
                <div className="justify-center items-center gap-1 inline-flex">
                  <div className="justify-start items-start flex" />
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">12/10/2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Review content */}
          <div className="w-full md:w-96 lg:w-full">
            <div className="text-neutral-600 text-lg font-normal font-['Manrope'] leading-tight tracking-tight">
              Thank You for this feedback
            </div>
            <div className="Btn px-4 py-1 bg-emerald-800 justify-center items-center gap-2.5 inline-flex" onClick={handleAddComment}>
              <div className=" text-center text-white text-base font-bold font-['Manrope'] tracking-tight">Add Comment</div>
            </div>
            <div className="Btn-delete px-4 py-1  justify-center items-center gap-2.5 inline-flex" onClick={handleDelete}>
              <div className="text-center text-red-800 text-base font-bold font-['Manrope'] tracking-tight">Delete</div>
            </div>
          </div>
        </div>
      </div>

      {/* User Information */}
      <div className="w-full left-[0] top-[650px] absolute flex-col justify-start items-start gap-4 inline-flex " style={{ paddingTop: '5px', paddingLeft: '10px' }}>
        {/* User details */}
        <div className="flex-col justify-start items-start gap-3 flex">
          {/* User profile */}
          <div className="flex-col justify-end items-start gap-2 flex">
            {/* Profile image and user details */}
            <div className="flex items-center">
              <img className="w-9 h-9 rounded-full" src={Solomon} alt="user" />
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Inter'] tracking-tight">Solomon Enahke</div>
                <div className="justify-center items-center gap-1 inline-flex">
                  <div className="justify-start items-start flex" />
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-xs font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    <img src={Star} alt="star" />
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">
                    Rating
                  </div>
                  <div className="text-center text-black text-sm font-medium font-['Manrope'] tracking-tight">12/10/2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Review content */}
          <div className="w-full md:w-96 lg:w-full">
            <span className="text-neutral-600 text-lg font-normal font-['Manrope'] leading-tight tracking-tight">
              Enjoyed a delightful meal at this restaurant. The ambiance was great, and the service was excellent. I highly recommend it!
            </span>
            <span className="text-emerald-400 text-lg font-semibold font-['Manrope'] leading-tight tracking-tight">See more</span>
          </div>
        </div>
        
        {/* Reply button */}
        <div className="Btn px-4 py-2 bg-emerald-400 justify-center items-center gap-2.5 inline-flex" onClick={handleReply}>
          <div className="Reply text-center text-white text-base font-medium font-['Manrope'] tracking-tight">Reply</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewReply;
