import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Flashcard from '../../../../../components/Flashcard';
import { lessonData } from '../../../../../data/lessons/index';

interface FlashcardPageProps {
  params: {
    studySetId: string;
    lessonId: string;
    flashcardId: string;
  };
}

export default function FlashcardPage({ params }: FlashcardPageProps) {
  const { studySetId, lessonId, flashcardId } = params;
  const studySet = lessonData.filter((set) => set.slug === studySetId)[0];
  const lesson = studySet.data.filter((lesson) => lesson.slug === lessonId)[0];
  const unit = lesson.units.filter((unit) => unit.slug === flashcardId)[0];

  return (
    <div className="w-full rounded-lg bg-black border border-green-900 p-4 lg:p-6">
      <div className="mb-12 space-y-5">
        <div className="space-y-1.5">
          {/* Back link */}
          <Link
            href={`/studysets/${studySetId}`}
            className="flex items-center gap-2 text-lg font-semibold text-green-400 hover:text-green-300 custom-transition"
          >
            <FaArrowLeft /> Back
          </Link>
          <h1 className="text-2xl sm:text-4xl font-bold">{unit.title}</h1>
          <p className="text-neutral-400 font-semibold">
          </p>
        </div>

        {/* Flashcard Component */}
        <Flashcard cardData={unit.items} />
      </div>
    </div>
  );
}