import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
type LessonControlButtonsProps = {
  isFaculty: boolean;
};
export default function LessonControlButtons({ isFaculty }: LessonControlButtonsProps) {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
