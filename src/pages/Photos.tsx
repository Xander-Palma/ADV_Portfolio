import Layout from "@/components/Layout";

// Photo data organized by days - you can add/remove images per day
const photoDays = [
  {
    day: 1,
    images: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
    ],
  },
  {
    day: 2,
    images: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ],
  },
  {
    day: 3,
    images: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ],
  },
  {
    day: 4,
    images: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ],
  },
];

const Photos = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="page-title animate-fade-in">Documented Images</h1>
        
        <div className="space-y-12">
          {photoDays.map((dayData, dayIndex) => (
            <div
              key={dayData.day}
              className="animate-fade-in"
              style={{ animationDelay: `${dayIndex * 0.1}s` }}
            >
              <h2 className="day-title">Day {dayData.day}</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {dayData.images.map((image, imageIndex) => (
                  <div
                    key={`${dayData.day}-${image.id}`}
                    className="image-card aspect-square animate-fade-in"
                    style={{ animationDelay: `${(dayIndex * 0.1) + (imageIndex * 0.05)}s` }}
                  >
                    IMAGE
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Photos;
