"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaRandom } from "react-icons/fa";
import Flashcard from "../../../../../components/Flashcard";
import { lessonData } from "../../../../../data/lessons/index";

interface FlashcardPageProps {
  params: {
    studySetId: string;
    lessonId: string;
    flashcardId: string;
  };
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function FlashcardPage({ params }: FlashcardPageProps) {
  const { studySetId, lessonId, flashcardId } = params;
  const studySet = lessonData.filter((set) => set.slug === studySetId)[0];
  const lesson = studySet.data.filter((lesson) => lesson.slug === lessonId)[0];
  const unit = lesson.units.filter((unit) => unit.slug === flashcardId)[0];

  const [cardData, setCardData] = useState(unit.items);
  const [shuffleCount, setShuffleCount] = useState(0);

  const handleShuffle = () => {
    const shuffledData = shuffle([...cardData]);
    setCardData([]);
    setCardData(shuffledData);
    setShuffleCount(shuffleCount + 1);
  };

  return (
    <div className="w-full rounded-lg bg-black border border-emerald-900 p-4 lg:p-6">
      <div className="mb-12 space-y-5">
        <div className="space-y-1.5">
          <Link
            href={`/studysets/${studySetId}`}
            className="flex items-center gap-2 text-lg font-semibold text-emerald-400 hover:text-emerald-300 custom-transition"
          >
            <FaArrowLeft /> Back
          </Link>
          <h1 className="text-2xl sm:text-4xl font-bold">{unit.title}</h1>
          <p className="text-neutral-400 font-semibold"></p>
        </div>

        <div className="space-y-5">
          <button
            onClick={() => handleShuffle()}
            className="flex items-center gap-2 text-lg font-semibold text-emerald-400 hover:text-emerald-300 custom-transition"
          >
            <FaRandom className="text-emerald-400" />
            <span className="ml-2">Shuffle</span>
          </button>
          <Flashcard key={shuffleCount} cardData={cardData} />
        </div>
      </div>
    </div>
  );
}