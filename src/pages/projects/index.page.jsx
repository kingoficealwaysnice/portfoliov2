import CustomHead from '@src/components/dom/CustomHead';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import projects from '@src/constants/projects';
import styles from '@src/pages/projects/projects.module.scss';

const seo = {
  title: 'Khushal - Projects',
  description:
    'Explore my portfolio of machine learning and blockchain development projects',
  keywords: [
    'machine learning projects',
    'blockchain development',
    'AI applications',
    'smart contracts',
    'Khushal portfolio',
  ],
};

function Page() {
  return (
    <>
      <CustomHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />
      <section className={clsx(styles.titleContainer, 'layout-block-inner')}>
        <h1 className={clsx(styles.title, 'h1')}>All Projects</h1>
      </section>
      <section className={clsx(styles.root, 'layout-block-inner')}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              className={styles.projectCard}
              aria-label={`View ${project.title} project`}
            >
              <div className={styles.projectImage}>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className={styles.image}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <span className={styles.date}>{project.date}</span>
                  <span className={styles.category}>{project.category}</span>
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
