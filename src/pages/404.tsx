import image from "../assets/404.svg";

export default function PageNotFound() {
  return (
    <img src={image} alt="404" className="md:w-[60%] lg:w-[70%] animate-fade" />
  );
}
