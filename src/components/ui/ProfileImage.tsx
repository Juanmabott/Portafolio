import { profile } from "../../data/profile";
import "./ProfileImage.css";

const ProfileImage = ({ alt }: { alt: string }) => {
  return (
    <div className="profile-image">
      <img
        src={`${import.meta.env.BASE_URL}${profile.photo}`}
        alt={alt}
        width={400}
        height={400}
        decoding="async"
      />
    </div>
  );
};

export default ProfileImage;
