import React, { Component } from "react";
import "../../pages/home/QuranVerse.css";

const reflections = [
  {
    source: "Qur’an",
    reference: "Al-Qasas · 28:77",
    arabic: "وَٱبْتَغِ فِيمَآ ءَاتَىٰكَ ٱللَّهُ ٱلدَّارَ ٱلْـَٔاخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ ٱلدُّنْيَا ۖ وَأَحْسِن كَمَآ أَحْسَنَ ٱللَّهُ إِلَيْكَ ۖ وَلَا تَبْغِ ٱلْفَسَادَ فِى ٱلْأَرْضِ ۖ إِنَّ ٱللَّهَ لَا يُحِبُّ ٱلْمُفْسِدِينَ",
    translation: "But seek, through that which Allāh has given you, the home of the Hereafter; and [yet], do not forget your share of the world. And do good as Allāh has done good to you. And desire not corruption in the land. Indeed, Allāh does not like corrupters.",
  },
  {
    source: "Qur’an",
    reference: "Ash-Shura · 42:38",
    arabic: "وَٱلَّذِينَ ٱسْتَجَابُوا۟ لِرَبِّهِمْ وَأَقَامُوا۟ ٱلصَّلَوٰةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ وَمِمَّا رَزَقْنَـٰهُمْ يُنفِقُونَ",
    translation: "And those who have responded to their Lord and established prayer and whose affair is [determined by] consultation among themselves, and from what We have provided them, they spend,",
  },
];

export default class ReflectionCarousel extends Component {
  state = { reflectionIndex: 0 };

  componentDidMount() {
    this.timer = window.setInterval(() => this.showReflection(1), 12000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  showReflection = (direction) => {
    this.setState(({ reflectionIndex }) => ({
      reflectionIndex: (reflectionIndex + direction + reflections.length) % reflections.length,
    }));
  };

  render() {
    const reflection = reflections[this.state.reflectionIndex];
    return (
      <section className="quran-verse" aria-label="Qur’an and hadith reflections">
        <div className="quran-verse-card">
          <div className="quran-verse-heading">
            <p className="quran-verse-eyebrow">A reflection to keep close</p>
            <p className="quran-verse-source">{reflection.source}</p>
            {reflection.reference && <h2 key={reflection.reference}>{reflection.reference}</h2>}
          </div>
          <p className="quran-verse-arabic" lang="ar" dir="rtl">{reflection.arabic}</p>
          {reflection.translation && (
            <blockquote key={`${reflection.reference}-translation`} className="quran-verse-translation">
              “{reflection.translation}”
            </blockquote>
          )}
          {reflection.lesson && <p className="quran-verse-lesson">{reflection.lesson}</p>}
          <div className="quran-verse-footer">
            <span className="quran-verse-credit" aria-hidden="true" />
            <div className="quran-verse-controls" aria-label="Choose reflection">
              <button type="button" onClick={() => this.showReflection(-1)} aria-label="Previous reflection">←</button>
              <button type="button" onClick={() => this.showReflection(1)} aria-label="Next reflection">→</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
