import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';

import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Shruti-0709/Spotify-Clone.git"
          h3="Spotify"
          p="Streaming App"
        />
         <ProjectCard
          src={fitLift}
          link="https://github.com/Shruti-0709/E-Queue.git"
          h3="E-Queue"
          p="Hospital Management"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Shruti-0709/MyntraHackerramp.git"
          h3="Get Your Style"
          p="Fashion Recommender"
        />
       
      </div>
    </section>
  );
}

export default Projects;
