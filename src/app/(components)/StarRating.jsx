'use client'
import React, { useState } from 'react';

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex flex-row-reverse justify-center">
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