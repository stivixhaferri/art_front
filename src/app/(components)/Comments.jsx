'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex  flex-row-reverse justify-end">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            type="button"
            className={`text-2xl ${index <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            onClick={() => setRating(index)}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

const Comments = ({ id }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const [honeypot, setHoneypot] = useState('');

  const getComments = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/comments', {
        headers: {
          'token': id
        }
      });
      console.log(res.data.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) {
      // If the honeypot field is filled out, do not submit the form
      console.log('Spam detected');
      return;
    }

    const newComment = { text: comment, rating, date: new Date().toISOString() };
    setComments([newComment, ...comments]);
    setComment('');
    setRating(0);

    try {
      const res = await axios.post('http://localhost:8000/api/postcomment', {
        username,
        comment,
        rate: rating,
        car_id: id
      }, {
        cache: 'no-store'
      });
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full py-8 lg:py-16 antialiased">
      <div className="mx-auto px-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">Leave a Review</h2>
        </div>
        <form className="mb-6 text-start" onSubmit={handleSubmit}>
          <StarRating rating={rating} setRating={setRating} />

          <div className="py-2 mb-4">
            <label htmlFor="honeypot" className="sr-only">Leave this field blank</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              className="hidden"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="py-2 mb-4">
            <label htmlFor="">Your Name</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className='w-full px-4 py-2 rounded-lg border-[0.5px]'
            />
          </div>

          <div className="py-2 mb-4 rounded-lg border">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows={6}
              className="px-2 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Write a comment..."
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="inline-flex bg-red-600 items-center py-2.5 px-4 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
          >
            Post comment
          </button>
        </form>
        
        {data && data.map((c, index) => (
          <article key={index} className="py-6 text-base rounded-lg dark:bg-gray-900 mb-4">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="User"
                  />
                  {c.username}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time dateTime={c.createdAt}>{new Date(c.createdAt).toLocaleDateString()}</time>
                </p>
              </div>
            </footer>
            <div className='flex items-center justify-start'>
              <StarRating rating={c.rate} setRating={() => { }} />
            </div>
            <p className="text-gray-500">{c.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Comments;
