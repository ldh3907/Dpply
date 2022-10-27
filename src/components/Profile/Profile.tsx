import { SuggestionPreview } from "../../types/suggestion/suggestion.type";
import ProfileApproveList from "./ProfileApproveList/ProfileApproveList";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePendingList from "./ProfilePendingList/ProfilePendingList";
import { ProfileContainer, ProfileWrap } from "./style";

const TEST: SuggestionPreview[] = [
  {
    id: 0,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 2,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 3,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 4,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 5,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
  {
    id: 6,
    imageUrl: "",
    user: {
      email: "ldh165163@gmail.com",
      grade: 1,
      name: "임동현",
      number: 2,
      profileImage: "",
      role: "STUDENT",
      room: 1,
      uniqueId: "1",
    },
    title: "이거 고쳐주세요",
    createAt: "2022.09.28",
    tag: ["SCHOOL"],
  },
];

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileWrap>
        <ProfileInfo />
        <ProfilePendingList data={TEST} />
        <ProfileApproveList data={TEST} />
      </ProfileWrap>
    </ProfileContainer>
  );
};

export default Profile;
