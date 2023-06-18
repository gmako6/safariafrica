import React from "react";

export const DestinationList = () => {
  // Assuming you have a destinations array with objects containing destination data
  const destinations = [
    { id: 1, name: "Destination 1", imageUrl: "image1.jpg" },
    { id: 2, name: "Destination 2", imageUrl: "image2.jpg" },
    { id: 3, name: "Destination 3", imageUrl: "image3.jpg" },
    { id: 4, name: "Destination 4", imageUrl: "image4.jpg" },
    { id: 5, name: "Destination 5", imageUrl: "image5.jpg" },
    { id: 6, name: "Destination 6", imageUrl: "image6.jpg" },
    // Add more destination objects as needed
  ];

  return (
    <section className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>

      {/* Add destination listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <div key={destination.id} className="border rounded-lg p-4">
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{destination.name}</h2>
            {/* Add more destination details as needed */}
          </div>
        ))}
      </div>
    </section>
  );
};
