import admissionsPoster from "@/assets/admissions-poster.jpg.asset.json";
import campusStudentsGathering from "@/assets/campus-students-gathering.jpg.asset.json";
import classroomActivity from "@/assets/classroom-activity.jpg.asset.json";
import classroomLearning from "@/assets/classroom-learning.jpg.asset.json";
import classroomTeaching from "@/assets/classroom-teaching.jpg.asset.json";
import culturalPerformance from "@/assets/cultural-performance.jpg.asset.json";
import directorPhoto from "@/assets/director-dr-virendra-srivastava.jpeg.asset.json";
import principalPhoto from "@/assets/principal-kalpana-srivastava.jpeg.asset.json";
import schoolAdultsMeeting from "@/assets/school-adults-meeting.jpg.asset.json";
import schoolAssembly from "@/assets/school-assembly.jpg.asset.json";
import schoolCampusGroup from "@/assets/school-campus-group.jpg.asset.json";
import schoolEntranceDisplay from "@/assets/school-entrance-display.jpg.asset.json";
import schoolEventAudience from "@/assets/school-event-audience.jpg.asset.json";
import schoolEventTent from "@/assets/school-event-tent.jpg.asset.json";
import schoolFrontEvent from "@/assets/school-front-event.jpg.asset.json";
import schoolFrontOriginal from "@/assets/school-front-original.png.asset.json";
import schoolLogo from "@/assets/school-logo.jpeg.asset.json";
import schoolProcession from "@/assets/school-procession.jpg.asset.json";
import schoolProjectExhibition from "@/assets/school-project-exhibition.jpg.asset.json";
import schoolSportsActivity from "@/assets/school-sports-activity.jpg.asset.json";
import schoolStaffGroupOutdoor from "@/assets/school-staff-group-outdoor.jpg.asset.json";
import staffEventGroup from "@/assets/staff-event-group.jpg.asset.json";
import staffOnStageEvent from "@/assets/staff-on-stage-event.jpg.asset.json";
import studentAchievement from "@/assets/student-achievement.jpg.asset.json";
import studentCulturalGroup from "@/assets/student-cultural-group.jpg.asset.json";
import studentPerformance from "@/assets/student-performance.jpg.asset.json";
import studentProjectExhibition from "@/assets/student-project-exhibition.jpg.asset.json";
import teachersDayEvent from "@/assets/teachers-day-event.jpg.asset.json";
import teachersGroupPhoto from "@/assets/teachers-group-photo.jpg.asset.json";
import teachersWithStudentsEvent from "@/assets/teachers-with-students-event.jpg.asset.json";

export const site = {
  name: "PNS Memorial School",
  board: "UP Board (English Medium)",
  classes: "Nursery to Class 8",
  timings: "8:00 AM – 2:00 PM",
  director: "Dr. Virendra Kumar Srivastava",
  directorRole: "Director & Manager",
  principal: "Kalpana Srivastava",
  principalRole: "Principal",
  phone: "9838719499",
  phoneIntl: "+919838719499",
  email: "pnsmemorialschool@gmail.com",
  address: "Sufipura, Brahmnipura, Bahraich, Uttar Pradesh 271801",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=27.5598586%2C81.5996483",
};

export const images = {
  logo: schoolLogo.url,
  heroFront: schoolFrontEvent.url,
  schoolFrontOriginal: schoolFrontOriginal.url,
  campusGroup: schoolCampusGroup.url,
  classroomActivity: classroomActivity.url,
  classroomLearning: classroomLearning.url,
  classroomTeaching: classroomTeaching.url,
  culturalPerformance: culturalPerformance.url,
  director: directorPhoto.url,
  principal: principalPhoto.url,
  entranceDisplay: schoolEntranceDisplay.url,
  admissionsPoster: admissionsPoster.url,
  assembly: schoolAssembly.url,
  eventAudience: schoolEventAudience.url,
  eventTent: schoolEventTent.url,
  procession: schoolProcession.url,
  projectExhibitionSchool: schoolProjectExhibition.url,
  sports: schoolSportsActivity.url,
  achievement: studentAchievement.url,
  culturalGroup: studentCulturalGroup.url,
  performance: studentPerformance.url,
  projectExhibitionStudent: studentProjectExhibition.url,
  teachersDay: teachersDayEvent.url,
  teachersGroup: teachersGroupPhoto.url,
  staffEventGroup: staffEventGroup.url,
  teachersWithStudents: teachersWithStudentsEvent.url,
  staffGroupOutdoor: schoolStaffGroupOutdoor.url,
  staffOnStage: staffOnStageEvent.url,
  staffMeeting: schoolAdultsMeeting.url,
};

export interface GalleryImage {
  src: string;
  alt: string;
}

/** Main photo gallery — clear, non-duplicate photos with factual captions. */
export const mainGallery: GalleryImage[] = [
  { src: images.schoolFrontOriginal, alt: "PNS Memorial School entrance" },
  { src: images.campusGroup, alt: "Students gathered on the school campus" },
  { src: images.assembly, alt: "School assembly" },
  { src: images.classroomLearning, alt: "Classroom learning in progress" },
  { src: images.classroomActivity, alt: "Activity-based learning in class" },
  { src: images.culturalPerformance, alt: "Cultural performance by students" },
  { src: images.performance, alt: "Student performing on stage" },
  { src: images.culturalGroup, alt: "Students in cultural dress" },
  { src: images.sports, alt: "School sports activity" },
  { src: images.projectExhibitionStudent, alt: "Student project exhibition" },
  { src: images.projectExhibitionSchool, alt: "Projects on display at the exhibition" },
  { src: images.eventTent, alt: "School event under the tent" },
  { src: images.eventAudience, alt: "Audience at a school event" },
  { src: images.teachersDay, alt: "Teachers' Day celebration" },
  { src: images.procession, alt: "School procession" },
  { src: images.heroFront, alt: "Front of PNS Memorial School" },
];

/** Teachers & Staff page photos — general captions only, no names. */
export const staffGallery: GalleryImage[] = [
  { src: images.teachersGroup, alt: "Our teachers and staff" },
  { src: images.staffEventGroup, alt: "School team at a school event" },
  { src: images.teachersWithStudents, alt: "Teachers with students at a school event" },
  { src: images.staffGroupOutdoor, alt: "School team outdoors" },
  { src: images.staffOnStage, alt: "School team on stage at a school event" },
  { src: images.staffMeeting, alt: "Staff meeting" },
];
