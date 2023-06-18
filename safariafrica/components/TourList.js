import React from "react";

export const TourList = () => {
  // Assuming you have a tours array with objects containing tour data
  const tours = [
    { id: 1, name: "Tour 1", imageUrl: "image1.jpg" },
    { id: 2, name: "Tour 2", imageUrl: "image2.jpg" },
    { id: 3, name: "Tour 3", imageUrl: "image3.jpg" },
    // Add more tour objects as needed
  ];

  return (
    <div>
      <section className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Discover Tours</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="border rounded-lg p-4">
              <img
                src={tour.imageUrl}
                alt={tour.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{tour.name}</h2>
              {/* Add more tour details as needed */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
