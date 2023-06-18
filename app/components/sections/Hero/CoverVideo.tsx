function CoverVideo() {
  return (
    <div className="bg-transparent mix-blend-multiply	">
      <video
        className=" min-w-full object-cover bg-transparent "
        autoPlay
        muted
      >
        <source src="/images/vector-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default CoverVideo;
