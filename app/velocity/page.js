export default function VelocityPage() {
  const clubs = [
    { name: "Science Club", description: "Exploring the wonders of science through experiments and projects" },
    { name: "Drama Club", description: "Developing acting skills and staging performances" },
    { name: "Music Club", description: "Learning instruments and vocal skills" },
    { name: "Debate Club", description: "Enhancing public speaking and critical thinking" },
    { name: "Environmental Club", description: "Promoting environmental conservation and awareness" },
    { name: "Sports Teams", description: "Football, basketball, athletics, and swimming teams" },
  ]

  const studentStories = [
    {
      name: "Sarah Wanjiku",
      grade: "Grade 8",
      story: "Excelling in mathematics and representing the school in national competitions",
    },
    {
      name: "David Kimani",
      grade: "Grade 7",
      story: "Leading the environmental club in tree planting initiatives around the school",
    },
    {
      name: "Grace Achieng",
      grade: "Grade 6",
      story: "Outstanding performance in creative writing and poetry competitions",
    },
  ]

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Student Life</h1>

        <section className="content-section">
          <h2>Clubs and Activities</h2>
          <p>
            At Mirema School, we believe in developing well-rounded individuals. Our diverse range of clubs and
            activities provides students with opportunities to explore their interests and develop new skills.
          </p>

          <div className="clubs-grid">
            {clubs.map((club, index) => (
              <div key={index} className="club-card">
                <h3>{club.name}</h3>
                <p>{club.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Featured Student Stories</h2>
          <p>
            Meet some of our outstanding students who are making a difference in their academic and extracurricular
            pursuits.
          </p>

          <div className="student-stories">
            {studentStories.map((student, index) => (
              <div key={index} className="student-story">
                <h3>{student.name}</h3>
                <p className="grade">{student.grade}</p>
                <p>{student.story}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
