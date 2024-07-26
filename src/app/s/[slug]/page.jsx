import React from 'react';
import Card from '@/app/(components)/Card';

const Page = async ({ params }) => {
  const slug = params.slug;
  let filteredCars = [];
  const data = await getData();
  const cars = data?.data || [];

  if (slug !== 'all') {
    const validMakes = [
      'bmw', 'volkswagen', 'audi', 'citroen', 'ford', 'jeep',
      'nissan', 'opel', 'peugeot', 'renault', 'subaru', 'volvo'
    ];

    if (validMakes.includes(slug)) {
      filteredCars = cars.filter((car) => car.make.toLowerCase() === slug);
    } else if (slug === 'mercedes_benz') {
      filteredCars = cars.filter((car) => {
        const make = car.make.toLowerCase();
        return make.includes('mercedes') || make.includes('benz');
      });
    } else {
      // Assume the slug is formatted as "city_transmission_price" or similar
      const parts = slug.split("_");
      const city = parts[0].toLowerCase();
      const dateOrTransmission = parts[1];
      const price = parseInt(parts[2], 10);

      filteredCars = cars.filter((car) => {
        const carCity = (car.city || '').toLowerCase();
        const carTransmission = (car.transmission || '').toLowerCase();
        const carRate = car.rate;

        return (
          (city === 'n' || carCity === city) &&
          (isNaN(price) || price === 'n' || carRate <= price) &&
          (dateOrTransmission === 'n' || carTransmission === dateOrTransmission.toLowerCase())
        );
      });
    }
  } else {
    filteredCars = cars;
  }

  return (
    <div className='gap-3 flex flex-col min-h-[90vh] lg:pt-0 pt-[15%]'>
      <div className='w-full px-[5%] grid lg:grid-cols-4 grid-cols-1 gap-1 py-5'>
        {filteredCars.length > 0 ? (
          filteredCars.map((el, index) => (
            <Card
              key={index}
              title={el.title}
              make={el.make}
              model={el.model}
              year={el.year}
              city={el.city}
              transmission={el.transmission}
              fuel={el.fuel}
              rate={el.rate}
              cover={el.cover}
              id={el._id}
              link={`/details/${el._id}`}
            />
          ))
        ) : (
          <div>No Cars Found</div>
        )}
      </div>
    </div>
  );
};

export default Page;

const getData = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/cars', {
      cache: 'no-store'
    });

    return res.json();
  } catch (error) {
    console.error('Failed to fetch data', error);
    return [];
  }
};
