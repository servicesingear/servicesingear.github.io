export const ContinuousImageScroll = () => {
    const images = [
  "/images/apply job.png",
  "/images/resume filtering.png",
  "/images/interview.png",
  "/images/get job.png",
  "/images/image6.png",
  "/images/career.png",
  "/images/image7.png",
  "/images/image8.png",
  "/images/apply job.png",
  "/images/resume filtering.png",
  "/images/interview.png",
  "/images/get job.png",
  "/images/image6.png",
  "/images/career.png",
  "/images/image7.png",
  "/images/image8.png",


];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll flex gap-6">
        {images.concat(images).map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`scroll-img-${idx}`}
            className="h-32 object-cover inline-block rounded-lg"
            loading="lazy"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
